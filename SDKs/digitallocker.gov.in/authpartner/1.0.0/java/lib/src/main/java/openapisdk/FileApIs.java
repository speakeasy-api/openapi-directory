package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class FileApIs {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FileApIs(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCertificateDataInXmlFormatFromUriId - Get Certificate Data in XML Format from URI
     *
     * Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.
    **/
    public openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriIdResponse getCertificateDataInXmlFormatFromUriId(openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/xml/{uri}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriIdResponse res = new openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriIdResponse() {{
            body = null;
            getCertificateDataInXMLFormatFromURIId400ApplicationJSONObject = null;
            getCertificateDataInXMLFormatFromURIId401ApplicationJSONObject = null;
            getCertificateDataInXMLFormatFromURIId404ApplicationJSONObject = null;
            getCertificateDataInXMLFormatFromURIId500ApplicationJSONOneOf = null;
            getCertificateDataInXMLFormatFromURIId503ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriId400ApplicationJson.class);
                res.getCertificateDataInXMLFormatFromURIId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriId401ApplicationJson.class);
                res.getCertificateDataInXMLFormatFromURIId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificateDataInXmlFormatFromUriId404ApplicationJson.class);
                res.getCertificateDataInXMLFormatFromURIId404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getCertificateDataInXMLFormatFromURIId500ApplicationJSONOneOf = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getCertificateDataInXMLFormatFromURIId503ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFileFromUriId - Get File from URI
     *
     * Returns a file from URI. This API can be used to fetch both issued document and uploaded document.
    **/
    public openapisdk.models.operations.GetFileFromUriIdResponse getFileFromUriId(openapisdk.models.operations.GetFileFromUriIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/file/{uri}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFileFromUriIdResponse res = new openapisdk.models.operations.GetFileFromUriIdResponse() {{
            getFileFromURIId200ApplicationPdfString = null;
            getFileFromURIId200ImageJpegString = null;
            getFileFromURIId200ImageJpgString = null;
            getFileFromURIId200ImagePngString = null;
            getFileFromURIId400ApplicationJSONObject = null;
            getFileFromURIId401ApplicationJSONObject = null;
            getFileFromURIId404ApplicationJSONObject = null;
            getFileFromURIId500ApplicationJSONOneOf = null;
            getFileFromURIId503ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getFileFromURIId200ApplicationPdfString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "image/jpeg")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getFileFromURIId200ImageJpegString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "image/jpg")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getFileFromURIId200ImageJpgString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "image/png")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getFileFromURIId200ImagePngString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFileFromUriId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFileFromUriId400ApplicationJson.class);
                res.getFileFromURIId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFileFromUriId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFileFromUriId401ApplicationJson.class);
                res.getFileFromURIId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFileFromUriId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFileFromUriId404ApplicationJson.class);
                res.getFileFromURIId404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getFileFromURIId500ApplicationJSONOneOf = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getFileFromURIId503ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListOfSelfUploadedDocuments - Get List of Self Uploaded Documents
     *
     * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
    **/
    public openapisdk.models.operations.GetListOfSelfUploadedDocumentsResponse getListOfSelfUploadedDocuments(openapisdk.models.operations.GetListOfSelfUploadedDocumentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/files/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListOfSelfUploadedDocumentsResponse res = new openapisdk.models.operations.GetListOfSelfUploadedDocumentsResponse() {{
            sample = null;
            getListOfSelfUploadedDocuments401ApplicationJSONObject = null;
            getListOfSelfUploadedDocuments404ApplicationJSONObject = null;
            getListOfSelfUploadedDocuments500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.sample = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfSelfUploadedDocuments401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfSelfUploadedDocuments401ApplicationJson.class);
                res.getListOfSelfUploadedDocuments401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfSelfUploadedDocuments404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfSelfUploadedDocuments404ApplicationJson.class);
                res.getListOfSelfUploadedDocuments404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfSelfUploadedDocuments500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfSelfUploadedDocuments500ApplicationJson.class);
                res.getListOfSelfUploadedDocuments500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListOfSelfUploadedDocumentsId - Get List of Self Uploaded Documents
     *
     * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
    **/
    public openapisdk.models.operations.GetListOfSelfUploadedDocumentsIdResponse getListOfSelfUploadedDocumentsId(openapisdk.models.operations.GetListOfSelfUploadedDocumentsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/files/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListOfSelfUploadedDocumentsIdResponse res = new openapisdk.models.operations.GetListOfSelfUploadedDocumentsIdResponse() {{
            sample = null;
            getListOfSelfUploadedDocumentsId401ApplicationJSONObject = null;
            getListOfSelfUploadedDocumentsId404ApplicationJSONObject = null;
            getListOfSelfUploadedDocumentsId500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.sample = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfSelfUploadedDocumentsId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfSelfUploadedDocumentsId401ApplicationJson.class);
                res.getListOfSelfUploadedDocumentsId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfSelfUploadedDocumentsId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfSelfUploadedDocumentsId404ApplicationJson.class);
                res.getListOfSelfUploadedDocumentsId404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfSelfUploadedDocumentsId500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfSelfUploadedDocumentsId500ApplicationJson.class);
                res.getListOfSelfUploadedDocumentsId500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListOfIssuedDocumentsVersion1Id - Issued Documents
     *
     * Returns the list of meta-data about issued documents in user’s DigiLocker.
    **/
    public openapisdk.models.operations.GetListOfIssuedDocumentsVersion1IdResponse getListOfIssuedDocumentsVersion1Id(openapisdk.models.operations.GetListOfIssuedDocumentsVersion1IdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/files/issued");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListOfIssuedDocumentsVersion1IdResponse res = new openapisdk.models.operations.GetListOfIssuedDocumentsVersion1IdResponse() {{
            sample = null;
            getListOfIssuedDocumentsVersion1Id401ApplicationJSONObject = null;
            getListOfIssuedDocumentsVersion1Id500ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.sample = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfIssuedDocumentsVersion1Id401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfIssuedDocumentsVersion1Id401ApplicationJson.class);
                res.getListOfIssuedDocumentsVersion1Id401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getListOfIssuedDocumentsVersion1Id500ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListOfIssuedDocumentsId - Issued Documents
     *
     * Returns the list of meta-data about issued documents in user’s DigiLocker.
    **/
    public openapisdk.models.operations.GetListOfIssuedDocumentsIdResponse getListOfIssuedDocumentsId() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/2/files/issued");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListOfIssuedDocumentsIdResponse res = new openapisdk.models.operations.GetListOfIssuedDocumentsIdResponse() {{
            getListOfIssuedDocumentsId200ApplicationJSONObject = null;
            getListOfIssuedDocumentsId401ApplicationJSONObject = null;
            getListOfIssuedDocumentsId500ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfIssuedDocumentsId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfIssuedDocumentsId200ApplicationJson.class);
                res.getListOfIssuedDocumentsId200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfIssuedDocumentsId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfIssuedDocumentsId401ApplicationJson.class);
                res.getListOfIssuedDocumentsId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getListOfIssuedDocumentsId500ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEAadhaarDataInXmlFormatId - Get e-Aadhaar Data in XML Format
     *
     * Returns e-Aadhaar data in XML format for the account.
    **/
    public openapisdk.models.operations.GetEAadhaarDataInXmlFormatIdResponse getEAadhaarDataInXmlFormatId(openapisdk.models.operations.GetEAadhaarDataInXmlFormatIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/2/xml/eaadhaar");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetEAadhaarDataInXmlFormatIdResponse res = new openapisdk.models.operations.GetEAadhaarDataInXmlFormatIdResponse() {{
            body = null;
            getEAadhaarDataInXMLFormatId401ApplicationJSONObject = null;
            getEAadhaarDataInXMLFormatId404ApplicationJSONObject = null;
            getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf = null;
            getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetEAadhaarDataInXmlFormatId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetEAadhaarDataInXmlFormatId401ApplicationJson.class);
                res.getEAadhaarDataInXMLFormatId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetEAadhaarDataInXmlFormatId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetEAadhaarDataInXmlFormatId404ApplicationJson.class);
                res.getEAadhaarDataInXMLFormatId404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * pullDocumentId - Pull Document
     *
     * This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.
    **/
    public openapisdk.models.operations.PullDocumentIdResponse pullDocumentId(openapisdk.models.operations.PullDocumentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/pull/pulldocument");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PullDocumentIdResponse res = new openapisdk.models.operations.PullDocumentIdResponse() {{
            sample = null;
            pullDocumentId400ApplicationJSONOneOf = null;
            pullDocumentId401ApplicationJSONObject = null;
            pullDocumentId404ApplicationJSONObject = null;
            pullDocumentId500ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.sample = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.pullDocumentId400ApplicationJSONOneOf = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PullDocumentId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PullDocumentId401ApplicationJson.class);
                res.pullDocumentId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PullDocumentId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PullDocumentId404ApplicationJson.class);
                res.pullDocumentId404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.pullDocumentId500ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * uploadFileToLockerId - Upload file to locker
     *
     * This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.
    **/
    public openapisdk.models.operations.UploadFileToLockerIdResponse uploadFileToLockerId(openapisdk.models.operations.UploadFileToLockerIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/oauth2/1/file/upload");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UploadFileToLockerIdResponse res = new openapisdk.models.operations.UploadFileToLockerIdResponse() {{
            fileUploadResponse = null;
            uploadFileToLockerId400ApplicationJSONObject = null;
            uploadFileToLockerId401ApplicationJSONObject = null;
            uploadFileToLockerId500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.fileUploadResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UploadFileToLockerId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UploadFileToLockerId400ApplicationJson.class);
                res.uploadFileToLockerId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UploadFileToLockerId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UploadFileToLockerId401ApplicationJson.class);
                res.uploadFileToLockerId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UploadFileToLockerId500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UploadFileToLockerId500ApplicationJson.class);
                res.uploadFileToLockerId500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}