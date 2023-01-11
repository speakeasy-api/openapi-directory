package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PillarReviewSummary
 * A pillar review summary of a lens review.
**/
public class PillarReviewSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public PillarReviewSummary withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarId")
    public String pillarId;
    public PillarReviewSummary withPillarId(String pillarId) {
        this.pillarId = pillarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarName")
    public String pillarName;
    public PillarReviewSummary withPillarName(String pillarName) {
        this.pillarName = pillarName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskCounts")
    public java.util.Map<String, Long> riskCounts;
    public PillarReviewSummary withRiskCounts(java.util.Map<String, Long> riskCounts) {
        this.riskCounts = riskCounts;
        return this;
    }
}