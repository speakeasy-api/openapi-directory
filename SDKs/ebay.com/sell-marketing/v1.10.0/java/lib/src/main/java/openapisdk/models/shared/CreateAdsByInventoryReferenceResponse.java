package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAdsByInventoryReferenceResponse
 * This type defines the fields returned when you create an ad by inventory reference ID.
**/
public class CreateAdsByInventoryReferenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ads")
    public AdReference[] ads;
    public CreateAdsByInventoryReferenceResponse withAds(AdReference[] ads) {
        this.ads = ads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public CreateAdsByInventoryReferenceResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceId")
    public String inventoryReferenceId;
    public CreateAdsByInventoryReferenceResponse withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceType")
    public String inventoryReferenceType;
    public CreateAdsByInventoryReferenceResponse withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public Integer statusCode;
    public CreateAdsByInventoryReferenceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}