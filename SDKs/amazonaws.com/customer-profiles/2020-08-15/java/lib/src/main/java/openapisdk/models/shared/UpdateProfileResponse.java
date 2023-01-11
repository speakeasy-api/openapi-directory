package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProfileResponse {
    @JsonProperty("ProfileId")
    public String profileId;
    public UpdateProfileResponse withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}