package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddProfileKeyRequestBody {
    @JsonProperty("KeyName")
    public String keyName;
    public AddProfileKeyRequestBody withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonProperty("ProfileId")
    public String profileId;
    public AddProfileKeyRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public AddProfileKeyRequestBody withValues(String[] values) {
        this.values = values;
        return this;
    }
}