package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PlayMediaRequest {
    @JsonProperty("constraints")
    public Constraints constraints;
    public PlayMediaRequest withConstraints(Constraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonProperty("userActivity")
    public UserActivity userActivity;
    public PlayMediaRequest withUserActivity(UserActivity userActivity) {
        this.userActivity = userActivity;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public PlayMediaRequest withVersion(String version) {
        this.version = version;
        return this;
    }
}