package openapisdk.models.operations;



public class ActionsGetEnvironmentSecretResponse {
    public String contentType;
    public ActionsGetEnvironmentSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetEnvironmentSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsSecret actionsSecret;
    public ActionsGetEnvironmentSecretResponse withActionsSecret(openapisdk.models.shared.ActionsSecret actionsSecret) {
        this.actionsSecret = actionsSecret;
        return this;
    }
}