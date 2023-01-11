package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionedCapacityDescription
 * The definition for a provisioned capacity unit.
**/
public class ProvisionedCapacityDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CapacityId")
    public String capacityId;
    public ProvisionedCapacityDescription withCapacityId(String capacityId) {
        this.capacityId = capacityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationDate")
    public String expirationDate;
    public ProvisionedCapacityDescription withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public ProvisionedCapacityDescription withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}