package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Wkhtmltopdf {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Wkhtmltopdf(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * wkhtmltopdfFromHtmlPost - Convert raw HTML to PDF
     *
     * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    public openapisdk.models.operations.WkhtmltopdfFromHtmlPostResponse wkhtmltopdfFromHtmlPost(openapisdk.models.operations.WkhtmltopdfFromHtmlPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wkhtmltopdf/html");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WkhtmltopdfFromHtmlPostResponse res = new openapisdk.models.operations.WkhtmltopdfFromHtmlPostResponse() {{
            apiResponseSuccess = null;
            apiResponseFailure = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseSuccess out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseSuccess.class);
                res.apiResponseSuccess = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseFailure out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseFailure.class);
                res.apiResponseFailure = out;
            }
        }

        return res;
    }
	
	
    /**
     * wkhtmltopdfFromUrlGet - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
    **/
    public openapisdk.models.operations.WkhtmltopdfFromUrlGetResponse wkhtmltopdfFromUrlGet(openapisdk.models.operations.WkhtmltopdfFromUrlGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wkhtmltopdf/url");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WkhtmltopdfFromUrlGetResponse res = new openapisdk.models.operations.WkhtmltopdfFromUrlGetResponse() {{
            apiResponseSuccess = null;
            wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString = null;
            apiResponseFailure = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseSuccess out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseSuccess.class);
                res.apiResponseSuccess = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseFailure out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseFailure.class);
                res.apiResponseFailure = out;
            }
        }

        return res;
    }
	
	
    /**
     * wkhtmltopdfFromUrlPost - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    public openapisdk.models.operations.WkhtmltopdfFromUrlPostResponse wkhtmltopdfFromUrlPost(openapisdk.models.operations.WkhtmltopdfFromUrlPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wkhtmltopdf/url");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WkhtmltopdfFromUrlPostResponse res = new openapisdk.models.operations.WkhtmltopdfFromUrlPostResponse() {{
            apiResponseSuccess = null;
            apiResponseFailure = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseSuccess out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseSuccess.class);
                res.apiResponseSuccess = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseFailure out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseFailure.class);
                res.apiResponseFailure = out;
            }
        }

        return res;
    }
	
}