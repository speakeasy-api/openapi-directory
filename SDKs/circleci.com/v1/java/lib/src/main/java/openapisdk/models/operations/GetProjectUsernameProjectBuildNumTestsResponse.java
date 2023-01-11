package openapisdk.models.operations;



public class GetProjectUsernameProjectBuildNumTestsResponse {
    public String contentType;
    public GetProjectUsernameProjectBuildNumTestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectBuildNumTestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tests tests;
    public GetProjectUsernameProjectBuildNumTestsResponse withTests(openapisdk.models.shared.Tests tests) {
        this.tests = tests;
        return this;
    }
}