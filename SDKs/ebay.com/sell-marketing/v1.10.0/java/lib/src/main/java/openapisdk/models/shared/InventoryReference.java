package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryReference
 * This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
**/
public class InventoryReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceId")
    public String inventoryReferenceId;
    public InventoryReference withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceType")
    public String inventoryReferenceType;
    public InventoryReference withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
}