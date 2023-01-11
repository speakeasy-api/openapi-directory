package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateConformancePackComplianceCount
 * The number of conformance packs that are compliant and noncompliant.
**/
public class AggregateConformancePackComplianceCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompliantConformancePackCount")
    public Long compliantConformancePackCount;
    public AggregateConformancePackComplianceCount withCompliantConformancePackCount(Long compliantConformancePackCount) {
        this.compliantConformancePackCount = compliantConformancePackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonCompliantConformancePackCount")
    public Long nonCompliantConformancePackCount;
    public AggregateConformancePackComplianceCount withNonCompliantConformancePackCount(Long nonCompliantConformancePackCount) {
        this.nonCompliantConformancePackCount = nonCompliantConformancePackCount;
        return this;
    }
}