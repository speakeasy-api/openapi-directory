package openapisdk.models.operations;



public class ActionsGetAllowedActionsRepositoryResponse {
    public String contentType;
    public ActionsGetAllowedActionsRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetAllowedActionsRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SelectedActions selectedActions;
    public ActionsGetAllowedActionsRepositoryResponse withSelectedActions(openapisdk.models.shared.SelectedActions selectedActions) {
        this.selectedActions = selectedActions;
        return this;
    }
}