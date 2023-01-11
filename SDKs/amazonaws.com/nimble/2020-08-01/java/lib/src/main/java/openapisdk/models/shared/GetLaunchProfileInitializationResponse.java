package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLaunchProfileInitializationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchProfileInitialization")
    public LaunchProfileInitialization launchProfileInitialization;
    public GetLaunchProfileInitializationResponse withLaunchProfileInitialization(LaunchProfileInitialization launchProfileInitialization) {
        this.launchProfileInitialization = launchProfileInitialization;
        return this;
    }
}