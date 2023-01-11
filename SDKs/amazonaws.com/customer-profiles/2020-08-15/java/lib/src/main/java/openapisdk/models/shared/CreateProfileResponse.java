package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProfileResponse {
    @JsonProperty("ProfileId")
    public String profileId;
    public CreateProfileResponse withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}