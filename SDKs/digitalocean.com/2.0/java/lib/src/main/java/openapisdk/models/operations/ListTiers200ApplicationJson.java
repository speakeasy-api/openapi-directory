package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTiers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ListTiers200ApplicationJsonTiers[] tiers;
    public ListTiers200ApplicationJson withTiers(ListTiers200ApplicationJsonTiers[] tiers) {
        this.tiers = tiers;
        return this;
    }
}