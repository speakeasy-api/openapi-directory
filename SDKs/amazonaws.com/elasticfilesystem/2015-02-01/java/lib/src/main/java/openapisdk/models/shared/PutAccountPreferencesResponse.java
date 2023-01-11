package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountPreferencesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdPreference")
    public ResourceIdPreference resourceIdPreference;
    public PutAccountPreferencesResponse withResourceIdPreference(ResourceIdPreference resourceIdPreference) {
        this.resourceIdPreference = resourceIdPreference;
        return this;
    }
}