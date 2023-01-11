package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody {
    @JsonProperty("maintenance")
    public String maintenance;
    public EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody withMaintenance(String maintenance) {
        this.maintenance = maintenance;
        return this;
    }
}