package openapisdk.models.operations;



public class GetProjectUsernameProjectEnvvarResponse {
    public String contentType;
    public GetProjectUsernameProjectEnvvarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Envvar[] envvars;
    public GetProjectUsernameProjectEnvvarResponse withEnvvars(openapisdk.models.shared.Envvar[] envvars) {
        this.envvars = envvars;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectEnvvarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}