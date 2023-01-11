package openapisdk.models.operations;



public class GistsListStarredResponse {
    public String contentType;
    public GistsListStarredResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListStarredResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListStarredResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BaseGist[] baseGists;
    public GistsListStarredResponse withBaseGists(openapisdk.models.shared.BaseGist[] baseGists) {
        this.baseGists = baseGists;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsListStarredResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}