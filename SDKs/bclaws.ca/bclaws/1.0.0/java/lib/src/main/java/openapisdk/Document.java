package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Document {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Document(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getDocumentIdAspectIdCivixIndexIdCivixDocumentId - Retrieves a specific document from the BCLaws legislative repository (HTML format)
     *
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
    **/
    public openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse getDocumentIdAspectIdCivixIndexIdCivixDocumentId(openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse res = new openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
     *
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
    **/
    public openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString(openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse res = new openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml - Retrieves a specific document from the BCLaws legislative repository (XML format)
     *
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
    **/
    public openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml(openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse res = new openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)
     *
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
    **/
    public openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString(openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse res = new openapisdk.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}