package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProfileRequestBody {
    @JsonProperty("ProfileId")
    public String profileId;
    public DeleteProfileRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}