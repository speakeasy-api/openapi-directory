package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInventoryItemInventoryArrayV2ItemInventoryV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Item item;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2 withItem(GetInventoryItemInventoryArrayV2ItemInventoryV2Item item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant")
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant merchant;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2 withMerchant(GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity quantity;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2 withQuantity(GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity quantity) {
        this.quantity = quantity;
        return this;
    }
}