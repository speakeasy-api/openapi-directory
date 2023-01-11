package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLaunchProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchProfile")
    public LaunchProfile launchProfile;
    public CreateLaunchProfileResponse withLaunchProfile(LaunchProfile launchProfile) {
        this.launchProfile = launchProfile;
        return this;
    }
}