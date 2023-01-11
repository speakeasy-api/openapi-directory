package openapisdk.models.operations;



public class ApplyPendingMaintenanceActionResponse {
    public openapisdk.models.shared.ApplyPendingMaintenanceActionResponse applyPendingMaintenanceActionResponse;
    public ApplyPendingMaintenanceActionResponse withApplyPendingMaintenanceActionResponse(openapisdk.models.shared.ApplyPendingMaintenanceActionResponse applyPendingMaintenanceActionResponse) {
        this.applyPendingMaintenanceActionResponse = applyPendingMaintenanceActionResponse;
        return this;
    }
    public String contentType;
    public ApplyPendingMaintenanceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundFault;
    public ApplyPendingMaintenanceActionResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ApplyPendingMaintenanceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}