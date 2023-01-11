package openapisdk.models.operations;



public class EnterpriseAdminGetAllowedActionsEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminGetAllowedActionsEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetAllowedActionsEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SelectedActions selectedActions;
    public EnterpriseAdminGetAllowedActionsEnterpriseResponse withSelectedActions(openapisdk.models.shared.SelectedActions selectedActions) {
        this.selectedActions = selectedActions;
        return this;
    }
}