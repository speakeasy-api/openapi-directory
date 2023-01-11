package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnebatchesGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem[] items;
    public OnebatchesGetResponses200ContentApplication1jsonSchema withItems(OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public OnebatchesGetResponses200ContentApplication1jsonSchema withTotal(Long total) {
        this.total = total;
        return this;
    }
}