package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceContributorCount
 * The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.
**/
public class ComplianceContributorCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CapExceeded")
    public Boolean capExceeded;
    public ComplianceContributorCount withCapExceeded(Boolean capExceeded) {
        this.capExceeded = capExceeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CappedCount")
    public Long cappedCount;
    public ComplianceContributorCount withCappedCount(Long cappedCount) {
        this.cappedCount = cappedCount;
        return this;
    }
}