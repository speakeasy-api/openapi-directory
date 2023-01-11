package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ComplianceSummary
 * The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
**/
public class ComplianceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ComplianceSummaryTimestamp")
    public OffsetDateTime complianceSummaryTimestamp;
    public ComplianceSummary withComplianceSummaryTimestamp(OffsetDateTime complianceSummaryTimestamp) {
        this.complianceSummaryTimestamp = complianceSummaryTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompliantResourceCount")
    public ComplianceContributorCount compliantResourceCount;
    public ComplianceSummary withCompliantResourceCount(ComplianceContributorCount compliantResourceCount) {
        this.compliantResourceCount = compliantResourceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonCompliantResourceCount")
    public ComplianceContributorCount nonCompliantResourceCount;
    public ComplianceSummary withNonCompliantResourceCount(ComplianceContributorCount nonCompliantResourceCount) {
        this.nonCompliantResourceCount = nonCompliantResourceCount;
        return this;
    }
}