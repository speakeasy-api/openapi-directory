package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApplicationMaintenanceConfigurationRequest {
    @JsonProperty("ApplicationMaintenanceConfigurationUpdate")
    public ApplicationMaintenanceConfigurationUpdate applicationMaintenanceConfigurationUpdate;
    public UpdateApplicationMaintenanceConfigurationRequest withApplicationMaintenanceConfigurationUpdate(ApplicationMaintenanceConfigurationUpdate applicationMaintenanceConfigurationUpdate) {
        this.applicationMaintenanceConfigurationUpdate = applicationMaintenanceConfigurationUpdate;
        return this;
    }
    @JsonProperty("ApplicationName")
    public String applicationName;
    public UpdateApplicationMaintenanceConfigurationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
}