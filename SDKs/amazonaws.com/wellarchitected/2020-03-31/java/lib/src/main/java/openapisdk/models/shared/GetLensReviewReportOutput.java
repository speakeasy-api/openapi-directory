package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLensReviewReportOutput
 * Output of a get lens review report call.
**/
public class GetLensReviewReportOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensReviewReport")
    public LensReviewReport lensReviewReport;
    public GetLensReviewReportOutput withLensReviewReport(LensReviewReport lensReviewReport) {
        this.lensReviewReport = lensReviewReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public GetLensReviewReportOutput withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public GetLensReviewReportOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}