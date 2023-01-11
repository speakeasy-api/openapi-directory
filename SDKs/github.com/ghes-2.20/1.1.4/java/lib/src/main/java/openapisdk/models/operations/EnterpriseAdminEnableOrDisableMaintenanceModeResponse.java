package openapisdk.models.operations;



public class EnterpriseAdminEnableOrDisableMaintenanceModeResponse {
    public String contentType;
    public EnterpriseAdminEnableOrDisableMaintenanceModeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminEnableOrDisableMaintenanceModeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MaintenanceStatus maintenanceStatus;
    public EnterpriseAdminEnableOrDisableMaintenanceModeResponse withMaintenanceStatus(openapisdk.models.shared.MaintenanceStatus maintenanceStatus) {
        this.maintenanceStatus = maintenanceStatus;
        return this;
    }
}