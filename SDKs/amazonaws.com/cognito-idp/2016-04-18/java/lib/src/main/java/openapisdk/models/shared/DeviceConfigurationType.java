package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceConfigurationType
 * The configuration for the user pool's device tracking.
**/
public class DeviceConfigurationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeRequiredOnNewDevice")
    public Boolean challengeRequiredOnNewDevice;
    public DeviceConfigurationType withChallengeRequiredOnNewDevice(Boolean challengeRequiredOnNewDevice) {
        this.challengeRequiredOnNewDevice = challengeRequiredOnNewDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceOnlyRememberedOnUserPrompt")
    public Boolean deviceOnlyRememberedOnUserPrompt;
    public DeviceConfigurationType withDeviceOnlyRememberedOnUserPrompt(Boolean deviceOnlyRememberedOnUserPrompt) {
        this.deviceOnlyRememberedOnUserPrompt = deviceOnlyRememberedOnUserPrompt;
        return this;
    }
}