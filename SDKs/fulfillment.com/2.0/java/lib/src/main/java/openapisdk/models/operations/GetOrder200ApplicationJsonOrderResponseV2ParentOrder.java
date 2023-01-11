package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrder200ApplicationJsonOrderResponseV2ParentOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetOrder200ApplicationJsonOrderResponseV2ParentOrder withId(Long id) {
        this.id = id;
        return this;
    }
}