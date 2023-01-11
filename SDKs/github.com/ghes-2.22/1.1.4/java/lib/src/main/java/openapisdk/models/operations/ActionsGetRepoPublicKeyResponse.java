package openapisdk.models.operations;



public class ActionsGetRepoPublicKeyResponse {
    public String contentType;
    public ActionsGetRepoPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetRepoPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsPublicKey actionsPublicKey;
    public ActionsGetRepoPublicKeyResponse withActionsPublicKey(openapisdk.models.shared.ActionsPublicKey actionsPublicKey) {
        this.actionsPublicKey = actionsPublicKey;
        return this;
    }
}