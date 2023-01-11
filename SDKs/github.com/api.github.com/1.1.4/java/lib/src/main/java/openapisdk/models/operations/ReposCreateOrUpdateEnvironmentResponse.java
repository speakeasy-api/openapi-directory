package openapisdk.models.operations;



public class ReposCreateOrUpdateEnvironmentResponse {
    public String contentType;
    public ReposCreateOrUpdateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreateOrUpdateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateOrUpdateEnvironmentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Environment environment;
    public ReposCreateOrUpdateEnvironmentResponse withEnvironment(openapisdk.models.shared.Environment environment) {
        this.environment = environment;
        return this;
    }
}