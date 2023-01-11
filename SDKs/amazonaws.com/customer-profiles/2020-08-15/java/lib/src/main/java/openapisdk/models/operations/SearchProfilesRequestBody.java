package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchProfilesRequestBody {
    @JsonProperty("KeyName")
    public String keyName;
    public SearchProfilesRequestBody withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public SearchProfilesRequestBody withValues(String[] values) {
        this.values = values;
        return this;
    }
}