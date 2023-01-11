package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationMaintenanceConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public UpdateApplicationMaintenanceConfigurationResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationMaintenanceConfigurationDescription")
    public ApplicationMaintenanceConfigurationDescription applicationMaintenanceConfigurationDescription;
    public UpdateApplicationMaintenanceConfigurationResponse withApplicationMaintenanceConfigurationDescription(ApplicationMaintenanceConfigurationDescription applicationMaintenanceConfigurationDescription) {
        this.applicationMaintenanceConfigurationDescription = applicationMaintenanceConfigurationDescription;
        return this;
    }
}