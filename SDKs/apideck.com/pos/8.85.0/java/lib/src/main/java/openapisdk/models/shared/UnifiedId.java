package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnifiedId {
    @JsonProperty("id")
    public String id;
    public UnifiedId withId(String id) {
        this.id = id;
        return this;
    }
}