package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceSummary
 * This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
**/
public class ComplianceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationSummaries")
    public ComplianceSummaryInfo[] violationSummaries;
    public ComplianceSummary withViolationSummaries(ComplianceSummaryInfo[] violationSummaries) {
        this.violationSummaries = violationSummaries;
        return this;
    }
}