package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfirmDeviceResponse
 * Confirms the device response.
**/
public class ConfirmDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserConfirmationNecessary")
    public Boolean userConfirmationNecessary;
    public ConfirmDeviceResponse withUserConfirmationNecessary(Boolean userConfirmationNecessary) {
        this.userConfirmationNecessary = userConfirmationNecessary;
        return this;
    }
}