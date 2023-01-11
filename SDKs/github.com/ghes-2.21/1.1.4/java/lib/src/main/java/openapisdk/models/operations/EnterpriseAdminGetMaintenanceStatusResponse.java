package openapisdk.models.operations;



public class EnterpriseAdminGetMaintenanceStatusResponse {
    public String contentType;
    public EnterpriseAdminGetMaintenanceStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetMaintenanceStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MaintenanceStatus maintenanceStatus;
    public EnterpriseAdminGetMaintenanceStatusResponse withMaintenanceStatus(openapisdk.models.shared.MaintenanceStatus maintenanceStatus) {
        this.maintenanceStatus = maintenanceStatus;
        return this;
    }
}