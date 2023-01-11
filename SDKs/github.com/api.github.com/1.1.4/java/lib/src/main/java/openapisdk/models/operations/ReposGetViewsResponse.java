package openapisdk.models.operations;



public class ReposGetViewsResponse {
    public String contentType;
    public ReposGetViewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetViewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetViewsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ViewTraffic viewTraffic;
    public ReposGetViewsResponse withViewTraffic(openapisdk.models.shared.ViewTraffic viewTraffic) {
        this.viewTraffic = viewTraffic;
        return this;
    }
}