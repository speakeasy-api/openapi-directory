package openapisdk.models.operations;



public class ReposGetEnvironmentResponse {
    public String contentType;
    public ReposGetEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Environment environment;
    public ReposGetEnvironmentResponse withEnvironment(openapisdk.models.shared.Environment environment) {
        this.environment = environment;
        return this;
    }
}