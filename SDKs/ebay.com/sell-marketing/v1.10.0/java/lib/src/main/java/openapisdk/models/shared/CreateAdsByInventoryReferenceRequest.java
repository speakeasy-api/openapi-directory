package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAdsByInventoryReferenceRequest
 * This type defines the fields needed to create ads by inventory reference ID request.
**/
public class CreateAdsByInventoryReferenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public String bidPercentage;
    public CreateAdsByInventoryReferenceRequest withBidPercentage(String bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceId")
    public String inventoryReferenceId;
    public CreateAdsByInventoryReferenceRequest withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceType")
    public String inventoryReferenceType;
    public CreateAdsByInventoryReferenceRequest withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
}