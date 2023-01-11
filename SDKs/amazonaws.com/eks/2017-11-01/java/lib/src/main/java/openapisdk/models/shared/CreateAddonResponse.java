package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAddonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addon")
    public Addon addon;
    public CreateAddonResponse withAddon(Addon addon) {
        this.addon = addon;
        return this;
    }
}