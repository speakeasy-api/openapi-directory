package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemVault {
    @JsonProperty("id")
    public String id;
    public ItemVault withId(String id) {
        this.id = id;
        return this;
    }
}