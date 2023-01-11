package openapisdk.models.operations;



public class ActionsGetEnvironmentPublicKeyResponse {
    public String contentType;
    public ActionsGetEnvironmentPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetEnvironmentPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsPublicKey actionsPublicKey;
    public ActionsGetEnvironmentPublicKeyResponse withActionsPublicKey(openapisdk.models.shared.ActionsPublicKey actionsPublicKey) {
        this.actionsPublicKey = actionsPublicKey;
        return this;
    }
}