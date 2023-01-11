package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceSummaryInfo
 * This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
**/
public class ComplianceSummaryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceType")
    public String complianceType;
    public ComplianceSummaryInfo withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingCount")
    public Integer listingCount;
    public ComplianceSummaryInfo withListingCount(Integer listingCount) {
        this.listingCount = listingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ComplianceSummaryInfo withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}