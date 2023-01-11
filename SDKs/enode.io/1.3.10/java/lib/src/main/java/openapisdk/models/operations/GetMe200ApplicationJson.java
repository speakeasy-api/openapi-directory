package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMe200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetMe200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedVendors")
    public GetMe200ApplicationJsonLinkedVendors[] linkedVendors;
    public GetMe200ApplicationJson withLinkedVendors(GetMe200ApplicationJsonLinkedVendors[] linkedVendors) {
        this.linkedVendors = linkedVendors;
        return this;
    }
}