package openapisdk.models.operations;



public class ReposGetTopPathsResponse {
    public String contentType;
    public ReposGetTopPathsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetTopPathsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetTopPathsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ContentTraffic[] contentTraffics;
    public ReposGetTopPathsResponse withContentTraffics(openapisdk.models.shared.ContentTraffic[] contentTraffics) {
        this.contentTraffics = contentTraffics;
        return this;
    }
}