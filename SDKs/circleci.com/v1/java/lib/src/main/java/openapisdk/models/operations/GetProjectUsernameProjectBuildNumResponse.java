package openapisdk.models.operations;



public class GetProjectUsernameProjectBuildNumResponse {
    public openapisdk.models.shared.BuildDetail buildDetail;
    public GetProjectUsernameProjectBuildNumResponse withBuildDetail(openapisdk.models.shared.BuildDetail buildDetail) {
        this.buildDetail = buildDetail;
        return this;
    }
    public String contentType;
    public GetProjectUsernameProjectBuildNumResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectBuildNumResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}