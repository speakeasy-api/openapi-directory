package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item withSku(String sku) {
        this.sku = sku;
        return this;
    }
}