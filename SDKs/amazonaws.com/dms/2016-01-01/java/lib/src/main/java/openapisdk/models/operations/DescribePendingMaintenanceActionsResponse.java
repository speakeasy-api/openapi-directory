package openapisdk.models.operations;



public class DescribePendingMaintenanceActionsResponse {
    public String contentType;
    public DescribePendingMaintenanceActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePendingMaintenanceActionsResponse describePendingMaintenanceActionsResponse;
    public DescribePendingMaintenanceActionsResponse withDescribePendingMaintenanceActionsResponse(openapisdk.models.shared.DescribePendingMaintenanceActionsResponse describePendingMaintenanceActionsResponse) {
        this.describePendingMaintenanceActionsResponse = describePendingMaintenanceActionsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribePendingMaintenanceActionsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribePendingMaintenanceActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}