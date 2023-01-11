package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAddonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addon")
    public Addon addon;
    public DescribeAddonResponse withAddon(Addon addon) {
        this.addon = addon;
        return this;
    }
}