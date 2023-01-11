package openapisdk.models.operations;



public class GetProjectUsernameProjectEnvvarNameResponse {
    public String contentType;
    public GetProjectUsernameProjectEnvvarNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Envvar envvar;
    public GetProjectUsernameProjectEnvvarNameResponse withEnvvar(openapisdk.models.shared.Envvar envvar) {
        this.envvar = envvar;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectEnvvarNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}