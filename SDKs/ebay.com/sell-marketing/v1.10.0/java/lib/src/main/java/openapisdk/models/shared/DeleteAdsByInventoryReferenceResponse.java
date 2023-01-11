package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteAdsByInventoryReferenceResponse
 * This type defines the fields returned by request to delete a set of ads by inventory reference ID.
**/
public class DeleteAdsByInventoryReferenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adIds")
    public String[] adIds;
    public DeleteAdsByInventoryReferenceResponse withAdIds(String[] adIds) {
        this.adIds = adIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public DeleteAdsByInventoryReferenceResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceId")
    public String inventoryReferenceId;
    public DeleteAdsByInventoryReferenceResponse withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceType")
    public String inventoryReferenceType;
    public DeleteAdsByInventoryReferenceResponse withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public Integer statusCode;
    public DeleteAdsByInventoryReferenceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}