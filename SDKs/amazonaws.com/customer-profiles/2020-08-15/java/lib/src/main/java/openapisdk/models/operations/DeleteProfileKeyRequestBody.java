package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProfileKeyRequestBody {
    @JsonProperty("KeyName")
    public String keyName;
    public DeleteProfileKeyRequestBody withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonProperty("ProfileId")
    public String profileId;
    public DeleteProfileKeyRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public DeleteProfileKeyRequestBody withValues(String[] values) {
        this.values = values;
        return this;
    }
}