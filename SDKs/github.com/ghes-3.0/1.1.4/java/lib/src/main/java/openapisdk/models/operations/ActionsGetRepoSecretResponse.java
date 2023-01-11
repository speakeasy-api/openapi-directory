package openapisdk.models.operations;



public class ActionsGetRepoSecretResponse {
    public String contentType;
    public ActionsGetRepoSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetRepoSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsSecret actionsSecret;
    public ActionsGetRepoSecretResponse withActionsSecret(openapisdk.models.shared.ActionsSecret actionsSecret) {
        this.actionsSecret = actionsSecret;
        return this;
    }
}