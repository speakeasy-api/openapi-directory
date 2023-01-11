package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FullItemVault {
    @JsonProperty("id")
    public String id;
    public FullItemVault withId(String id) {
        this.id = id;
        return this;
    }
}