package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Attachments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Attachments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postRmmPreSignAttachment - Upload an attachment via a signed URL
     *
     * You can send any URL as part of your SMS text.  When the recipient taps on the URL, the file to which the URL points will be downloaded and opened on the mobile device.  This handy feature is supported by most modern mobile devices.
     * 
     * The best way to send an attachment is to store the file on a web server you own and use that URL in the SMS text.  Your customer will then see a URL that she will recognise as belonging to you.  This is the most flexible and the simplest solution.
     * 
     * However, if it is not possible to use your web server, you can use BulkSMS storage to keep the files that you want to attach to your SMS message.  Please note that these files will be deleted after 30 days.   
     * 
     * The process to use the BulkSMS storage requires you to take three steps:
     * 
     * **Step 1**: Use your BulkSMS credentials (or your API Token) to request a pre-signed URL.  This is what this `pre-sign-attachment` method is for.  It returns a PreSignInfo object that you will use in the other two steps.
     * 
     * **Step 2**: Upload the file using a standard HTTP `PUT` request. For your `PUT` request, use the value of `putURL` from the PreSignInfo object as the request address.  You also have to add the entries from the `fields` property (of the PreSignInfo object) to the headers of your 'PUT' request. You send the file content as the body of the `PUT` request.
     * 
     * **Step 3**: Now you can use the value of `fetchURL` from the PreSignInfo object in the body of your SMS messages and send those using the usual messaging API (described elsewhere in this document).  If you send the same file to many recipients, it is safe to use the same URL for all of them.
     * 
     * If you need to, take a closer look at the example program (on the right-hand side) to get a better idea of how to implement this process.
     * 
    **/
    public openapisdk.models.operations.PostRmmPreSignAttachmentResponse postRmmPreSignAttachment(openapisdk.models.operations.PostRmmPreSignAttachmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rmm/pre-sign-attachment");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRmmPreSignAttachmentResponse res = new openapisdk.models.operations.PostRmmPreSignAttachmentResponse() {{
            preSignInfo = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreSignInfo out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreSignInfo.class);
                res.preSignInfo = out;
            }
        }

        return res;
    }
	
}