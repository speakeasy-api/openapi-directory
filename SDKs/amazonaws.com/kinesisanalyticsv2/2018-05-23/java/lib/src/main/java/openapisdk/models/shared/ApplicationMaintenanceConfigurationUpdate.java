package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApplicationMaintenanceConfigurationUpdate
 * Describes the updated maintenance configuration for the application.
**/
public class ApplicationMaintenanceConfigurationUpdate {
    @JsonProperty("ApplicationMaintenanceWindowStartTimeUpdate")
    public String applicationMaintenanceWindowStartTimeUpdate;
    public ApplicationMaintenanceConfigurationUpdate withApplicationMaintenanceWindowStartTimeUpdate(String applicationMaintenanceWindowStartTimeUpdate) {
        this.applicationMaintenanceWindowStartTimeUpdate = applicationMaintenanceWindowStartTimeUpdate;
        return this;
    }
}