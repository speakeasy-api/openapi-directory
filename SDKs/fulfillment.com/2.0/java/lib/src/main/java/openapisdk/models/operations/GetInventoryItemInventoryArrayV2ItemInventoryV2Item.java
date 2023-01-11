package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInventoryItemInventoryArrayV2ItemInventoryV2Item
 * Item this inventory data is based on
**/
public class GetInventoryItemInventoryArrayV2ItemInventoryV2Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Item withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuReference")
    public String skuReference;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Item withSkuReference(String skuReference) {
        this.skuReference = skuReference;
        return this;
    }
}