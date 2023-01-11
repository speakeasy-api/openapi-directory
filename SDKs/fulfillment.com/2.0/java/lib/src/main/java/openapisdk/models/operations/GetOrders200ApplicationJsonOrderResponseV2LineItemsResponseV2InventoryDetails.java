package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public LocalDate expirationDate;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails withExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lotNum")
    public String lotNum;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails withLotNum(String lotNum) {
        this.lotNum = lotNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNum")
    public String serialNum;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails withSerialNum(String serialNum) {
        this.serialNum = serialNum;
        return this;
    }
}