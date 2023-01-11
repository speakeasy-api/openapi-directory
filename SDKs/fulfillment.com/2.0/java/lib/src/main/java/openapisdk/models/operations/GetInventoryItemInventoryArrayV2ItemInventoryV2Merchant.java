package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant
 * Merchant that owns this item
**/
public class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant withName(String name) {
        this.name = name;
        return this;
    }
}