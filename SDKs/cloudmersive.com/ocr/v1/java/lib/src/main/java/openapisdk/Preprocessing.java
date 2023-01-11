package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Preprocessing {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Preprocessing(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * preprocessingBinarize - Convert an image of text into a binarized (light and dark) view
     *
     * Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
    **/
    public openapisdk.models.operations.PreprocessingBinarizeResponse preprocessingBinarize(openapisdk.models.operations.PreprocessingBinarizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ocr/preprocessing/image/binarize");
        
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

        openapisdk.models.operations.PreprocessingBinarizeResponse res = new openapisdk.models.operations.PreprocessingBinarizeResponse() {{
            preprocessingBinarize200ApplicationJSONByteString = null;
            preprocessingBinarize200ApplicationXMLByteString = null;
            preprocessingBinarize200TextJSONByteString = null;
            preprocessingBinarize200TextXMLByteString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarize200ApplicationJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarize200ApplicationXMLByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarize200TextJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarize200TextXMLByteString = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprocessingBinarizeAdvanced - Convert an image of text into a binary (light and dark) view with ML
     *
     * Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
    **/
    public openapisdk.models.operations.PreprocessingBinarizeAdvancedResponse preprocessingBinarizeAdvanced(openapisdk.models.operations.PreprocessingBinarizeAdvancedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ocr/preprocessing/image/binarize/advanced");
        
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

        openapisdk.models.operations.PreprocessingBinarizeAdvancedResponse res = new openapisdk.models.operations.PreprocessingBinarizeAdvancedResponse() {{
            preprocessingBinarizeAdvanced200ApplicationJSONByteString = null;
            preprocessingBinarizeAdvanced200ApplicationXMLByteString = null;
            preprocessingBinarizeAdvanced200TextJSONByteString = null;
            preprocessingBinarizeAdvanced200TextXMLByteString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarizeAdvanced200ApplicationJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarizeAdvanced200ApplicationXMLByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarizeAdvanced200TextJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingBinarizeAdvanced200TextXMLByteString = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprocessingGetPageAngle - Get the angle of the page / document / receipt
     *
     * Analyzes a photo or image of a document and identifies the rotation angle of the page.
    **/
    public openapisdk.models.operations.PreprocessingGetPageAngleResponse preprocessingGetPageAngle(openapisdk.models.operations.PreprocessingGetPageAngleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ocr/preprocessing/image/get-page-angle");
        
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

        openapisdk.models.operations.PreprocessingGetPageAngleResponse res = new openapisdk.models.operations.PreprocessingGetPageAngleResponse() {{
            getPageAngleResult = null;
            getPageAngleResult = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetPageAngleResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetPageAngleResult.class);
                res.getPageAngleResult = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetPageAngleResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetPageAngleResult.class);
                res.getPageAngleResult = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprocessingUnrotate - Detect and unrotate a document image
     *
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    public openapisdk.models.operations.PreprocessingUnrotateResponse preprocessingUnrotate(openapisdk.models.operations.PreprocessingUnrotateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ocr/preprocessing/image/unrotate");
        
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

        openapisdk.models.operations.PreprocessingUnrotateResponse res = new openapisdk.models.operations.PreprocessingUnrotateResponse() {{
            preprocessingUnrotate200ApplicationJSONByteString = null;
            preprocessingUnrotate200ApplicationXMLByteString = null;
            preprocessingUnrotate200TextJSONByteString = null;
            preprocessingUnrotate200TextXMLByteString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotate200ApplicationJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotate200ApplicationXMLByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotate200TextJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotate200TextXMLByteString = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprocessingUnrotateAdvanced - Detect and unrotate a document image (advanced)
     *
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    public openapisdk.models.operations.PreprocessingUnrotateAdvancedResponse preprocessingUnrotateAdvanced(openapisdk.models.operations.PreprocessingUnrotateAdvancedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ocr/preprocessing/image/unrotate/advanced");
        
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

        openapisdk.models.operations.PreprocessingUnrotateAdvancedResponse res = new openapisdk.models.operations.PreprocessingUnrotateAdvancedResponse() {{
            preprocessingUnrotateAdvanced200ApplicationJSONByteString = null;
            preprocessingUnrotateAdvanced200ApplicationXMLByteString = null;
            preprocessingUnrotateAdvanced200TextJSONByteString = null;
            preprocessingUnrotateAdvanced200TextXMLByteString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotateAdvanced200ApplicationJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotateAdvanced200ApplicationXMLByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotateAdvanced200TextJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnrotateAdvanced200TextXMLByteString = out;
            }
        }

        return res;
    }
	
	
    /**
     * preprocessingUnskew - Detect and unskew a photo of a document
     *
     * Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    public openapisdk.models.operations.PreprocessingUnskewResponse preprocessingUnskew(openapisdk.models.operations.PreprocessingUnskewRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ocr/preprocessing/image/unskew");
        
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

        openapisdk.models.operations.PreprocessingUnskewResponse res = new openapisdk.models.operations.PreprocessingUnskewResponse() {{
            preprocessingUnskew200ApplicationJSONByteString = null;
            preprocessingUnskew200ApplicationXMLByteString = null;
            preprocessingUnskew200TextJSONByteString = null;
            preprocessingUnskew200TextXMLByteString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnskew200ApplicationJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnskew200ApplicationXMLByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnskew200TextJSONByteString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.preprocessingUnskew200TextXMLByteString = out;
            }
        }

        return res;
    }
	
}