package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLaunchConfigurationRequestBodyLicensing
 * Configure Licensing.
**/
public class UpdateLaunchConfigurationRequestBodyLicensing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osByol")
    public Boolean osByol;
    public UpdateLaunchConfigurationRequestBodyLicensing withOsByol(Boolean osByol) {
        this.osByol = osByol;
        return this;
    }
}