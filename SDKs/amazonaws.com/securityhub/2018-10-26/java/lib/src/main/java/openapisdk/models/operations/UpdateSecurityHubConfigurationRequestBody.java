package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSecurityHubConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoEnableControls")
    public Boolean autoEnableControls;
    public UpdateSecurityHubConfigurationRequestBody withAutoEnableControls(Boolean autoEnableControls) {
        this.autoEnableControls = autoEnableControls;
        return this;
    }
}