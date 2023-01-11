package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTagOptionInput {
    @JsonProperty("Key")
    public String key;
    public CreateTagOptionInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public CreateTagOptionInput withValue(String value) {
        this.value = value;
        return this;
    }
}