package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Resources {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Resources(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addFolder - Create a folder
     *
     * Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.
     * 
     * **Notes:**
     * - Authenticated user should have modify permission.
     * 
    **/
    public openapisdk.models.operations.AddFolderResponse addFolder(openapisdk.models.operations.AddFolderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources");
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddFolderResponse res = new openapisdk.models.operations.AddFolderResponse() {{
            resourceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceResponse.class);
                res.resourceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * compressFiles - Compress resources
     *
     * Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.
     * 
     * **Notes:**
     * - Authenticated user should have modify permission.
     * 
    **/
    public openapisdk.models.operations.CompressFilesResponse compressFiles(openapisdk.models.operations.CompressFilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/compress");
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CompressFilesResponse res = new openapisdk.models.operations.CompressFilesResponse() {{
            resourceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceResponse.class);
                res.resourceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * copyResources - Copy resources
     *
     * Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
     * In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the 
     * root of the `parentResource`.
     * 
     * **Notes:**
     * - Authenticated user should have modify permission.
     * 
    **/
    public openapisdk.models.operations.CopyResourcesResponse copyResources(openapisdk.models.operations.CopyResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/copy");
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CopyResourcesResponse res = new openapisdk.models.operations.CopyResourcesResponse() {{
            resourceCopyMove = null;
            resourceMultiResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceCopyMove out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceCopyMove.class);
                res.resourceCopyMove = out;
            }
        }
        else if (httpRes.statusCode() == 207) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceMultiResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceMultiResponse.class);
                res.resourceMultiResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteResourceById - Delete a Resource
     *
     * Delete a single file or folder resource. Deleting a folder will also delete all of the contents.
     * 
     * **Notes:**
     * - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     * - There is no way to un-delete a deleted resource.
     * 
    **/
    public openapisdk.models.operations.DeleteResourceByIdResponse deleteResourceById(openapisdk.models.operations.DeleteResourceByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteResourceByIdResponse res = new openapisdk.models.operations.DeleteResourceByIdResponse() {{
            emptyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EmptyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EmptyResponse.class);
                res.emptyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteResources - Delete Resources
     *
     * Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.
     * 
     * **Notes:**
     * - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     * - It is not possible to un-delete a deleted resource.
     * 
    **/
    public openapisdk.models.operations.DeleteResourcesResponse deleteResources(openapisdk.models.operations.DeleteResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteResourcesResponse res = new openapisdk.models.operations.DeleteResourcesResponse() {{
            emptyResponse = null;
            resourceMultiResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EmptyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EmptyResponse.class);
                res.emptyResponse = out;
            }
        }
        else if (httpRes.statusCode() == 207) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceMultiResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceMultiResponse.class);
                res.resourceMultiResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * download - Download a file
     *
     * Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.
     * 
     * **NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.
    **/
    public openapisdk.models.operations.DownloadResponse download(openapisdk.models.operations.DownloadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/download");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DownloadResponse res = new openapisdk.models.operations.DownloadResponse() {{
            download200ApplicationOctetStreamBinaryString = null;
            download200ApplicationZipBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.download200ApplicationOctetStreamBinaryString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/zip")) {
                byte[] out = httpRes.body();
                res.download200ApplicationZipBinaryString = out;
            }
        }

        return res;
    }
	
	
    /**
     * extractFiles - Extract resources
     *
     * Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.
     * 
     * **Notes:**
     * - You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.
     * 
    **/
    public openapisdk.models.operations.ExtractFilesResponse extractFiles(openapisdk.models.operations.ExtractFilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/extract");
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ExtractFilesResponse res = new openapisdk.models.operations.ExtractFilesResponse() {{
            resourceCollectionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceCollectionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceCollectionResponse.class);
                res.resourceCollectionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPreviewImage - Preview a file
     *
     * Returns a resized image of the specified document for supported file types.
     * 
     * Image data returned is encoded in base64 format and can be viewed using the `<img>` element. 
     * 
     * ```<img src='data:image/jpeg;base64' + meta.image/>```
     * 
     * **Notes:**
     * - Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`
     * 
    **/
    public openapisdk.models.operations.GetPreviewImageResponse getPreviewImage(openapisdk.models.operations.GetPreviewImageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/preview");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPreviewImageResponse res = new openapisdk.models.operations.GetPreviewImageResponse() {{
            previewFileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewFileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewFileResponse.class);
                res.previewFileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getResourceInfo - Get Resource Properties
     *
     * Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.
     * 
     * **Notes:**
     * - Authenticated user should have list permission.
     * 
    **/
    public openapisdk.models.operations.GetResourceInfoResponse getResourceInfo(openapisdk.models.operations.GetResourceInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourceInfoResponse res = new openapisdk.models.operations.GetResourceInfoResponse() {{
            resourceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceResponse.class);
                res.resourceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getResourceInfoById - Get resource metadata
     *
     * Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.
     * 
     * **Notes:**
     * - Authenticated user should have list permission.
     * 
    **/
    public openapisdk.models.operations.GetResourceInfoByIdResponse getResourceInfoById(openapisdk.models.operations.GetResourceInfoByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourceInfoByIdResponse res = new openapisdk.models.operations.GetResourceInfoByIdResponse() {{
            resourceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceResponse.class);
                res.resourceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listResourceContents - List contents of folder
     *
     * Returns a list of files/folders for the parent resource ID. 
     * 
     * You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. ** /myfiles/some_folder**).
     * 
     * **Notes:**
     * - Authenticated user should have list permission.
     * 
    **/
    public openapisdk.models.operations.ListResourceContentsResponse listResourceContents(openapisdk.models.operations.ListResourceContentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/list/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListResourceContentsResponse res = new openapisdk.models.operations.ListResourceContentsResponse() {{
            resourceCollectionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceCollectionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceCollectionResponse.class);
                res.resourceCollectionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listResources - Get a list of all resources
     *
     * Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /). 
     * 
     * **Searching for Files and Folders**
     * 
     * Using the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:
     * 
     * - \*Report\* would find any files or folders with "Report" in the name.
     * - Data\_202?-09-30.xlsx would match items such as "Data\_2020-09-30.xlsx", "DATA\_2021-09-30.xlsx", "data\_2022-09-30.xlsx" etc.
     * - sales\* would find any files or folders starting with the word "Sales"
     * - \*.csv would locate any files ending in ".csv"
     * - \* matches everything within the directory tree starting at your given `resource`
     * 
     * The search is not case-sensitive. Searching for Clients\* or clients\* or CLIENTS\*, etc. will provide identical results
     * 
     * If you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.
    **/
    public openapisdk.models.operations.ListResourcesResponse listResources(openapisdk.models.operations.ListResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/list");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListResourcesResponse res = new openapisdk.models.operations.ListResourcesResponse() {{
            resourceCollectionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceCollectionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceCollectionResponse.class);
                res.resourceCollectionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * moveResources - Move resources
     *
     * Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
     * In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.
     * 
     * **Notes:**
     * - Authenticated user should have modify permission.
     * 
    **/
    public openapisdk.models.operations.MoveResourcesResponse moveResources(openapisdk.models.operations.MoveResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/move");
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MoveResourcesResponse res = new openapisdk.models.operations.MoveResourcesResponse() {{
            resourceCopyMove = null;
            resourceMultiResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceCopyMove out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceCopyMove.class);
                res.resourceCopyMove = out;
            }
        }
        else if (httpRes.statusCode() == 207) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceMultiResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceMultiResponse.class);
                res.resourceMultiResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateResourceById - Rename a resource.
     *
     * Update the specified file or folder resource record's "name" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.
     * 
    **/
    public openapisdk.models.operations.UpdateResourceByIdResponse updateResourceById(openapisdk.models.operations.UpdateResourceByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateResourceByIdResponse res = new openapisdk.models.operations.UpdateResourceByIdResponse() {{
            resourceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceResponse.class);
                res.resourceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * uploadFile - Upload a file
     *
     * Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.
     * 
    **/
    public openapisdk.models.operations.UploadFileResponse uploadFile(openapisdk.models.operations.UploadFileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/upload");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UploadFileResponse res = new openapisdk.models.operations.UploadFileResponse() {{
            resourceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResourceResponse.class);
                res.resourceResponse = out;
            }
        }

        return res;
    }
	
}