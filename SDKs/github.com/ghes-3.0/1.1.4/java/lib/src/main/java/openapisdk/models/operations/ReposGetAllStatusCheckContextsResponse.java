package openapisdk.models.operations;



public class ReposGetAllStatusCheckContextsResponse {
    public String contentType;
    public ReposGetAllStatusCheckContextsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetAllStatusCheckContextsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetAllStatusCheckContextsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public String[] reposGetAllStatusCheckContexts200ApplicationJSONStrings;
    public ReposGetAllStatusCheckContextsResponse withReposGetAllStatusCheckContexts200ApplicationJsonStrings(String[] reposGetAllStatusCheckContexts200ApplicationJSONStrings) {
        this.reposGetAllStatusCheckContexts200ApplicationJSONStrings = reposGetAllStatusCheckContexts200ApplicationJSONStrings;
        return this;
    }
}