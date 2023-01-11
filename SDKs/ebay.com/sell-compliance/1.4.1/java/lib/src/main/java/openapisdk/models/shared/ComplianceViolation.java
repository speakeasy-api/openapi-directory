package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceViolation
 * This type is used by each listing violation that is returned under the listingViolations container.
**/
public class ComplianceViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceType")
    public String complianceType;
    public ComplianceViolation withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public ComplianceViolation withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public ComplianceViolation withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public ComplianceViolation withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violations")
    public ComplianceDetail[] violations;
    public ComplianceViolation withViolations(ComplianceDetail[] violations) {
        this.violations = violations;
        return this;
    }
}