package openapisdk.models.operations;



public class ActionsGetAllowedActionsOrganizationResponse {
    public String contentType;
    public ActionsGetAllowedActionsOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetAllowedActionsOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SelectedActions selectedActions;
    public ActionsGetAllowedActionsOrganizationResponse withSelectedActions(openapisdk.models.shared.SelectedActions selectedActions) {
        this.selectedActions = selectedActions;
        return this;
    }
}