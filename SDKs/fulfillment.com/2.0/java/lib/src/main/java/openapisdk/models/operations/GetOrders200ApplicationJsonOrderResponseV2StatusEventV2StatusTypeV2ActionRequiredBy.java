package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
 * Responsibility for resolving this issue
**/
public class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy withName(String name) {
        this.name = name;
        return this;
    }
}