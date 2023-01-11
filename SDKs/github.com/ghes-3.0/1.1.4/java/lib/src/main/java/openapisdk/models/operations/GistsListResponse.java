package openapisdk.models.operations;



public class GistsListResponse {
    public String contentType;
    public GistsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BaseGist[] baseGists;
    public GistsListResponse withBaseGists(openapisdk.models.shared.BaseGist[] baseGists) {
        this.baseGists = baseGists;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsListResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}