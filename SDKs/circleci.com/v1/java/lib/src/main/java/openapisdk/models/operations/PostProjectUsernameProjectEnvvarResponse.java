package openapisdk.models.operations;



public class PostProjectUsernameProjectEnvvarResponse {
    public String contentType;
    public PostProjectUsernameProjectEnvvarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Envvar envvar;
    public PostProjectUsernameProjectEnvvarResponse withEnvvar(openapisdk.models.shared.Envvar envvar) {
        this.envvar = envvar;
        return this;
    }
    public Long statusCode;
    public PostProjectUsernameProjectEnvvarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}