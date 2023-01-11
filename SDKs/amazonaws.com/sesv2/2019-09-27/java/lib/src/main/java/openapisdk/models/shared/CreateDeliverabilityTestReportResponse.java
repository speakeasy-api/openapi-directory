package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateDeliverabilityTestReportResponse
 * Information about the predictive inbox placement test that you created.
**/
public class CreateDeliverabilityTestReportResponse {
    @JsonProperty("DeliverabilityTestStatus")
    public DeliverabilityTestStatusEnum deliverabilityTestStatus;
    public CreateDeliverabilityTestReportResponse withDeliverabilityTestStatus(DeliverabilityTestStatusEnum deliverabilityTestStatus) {
        this.deliverabilityTestStatus = deliverabilityTestStatus;
        return this;
    }
    @JsonProperty("ReportId")
    public String reportId;
    public CreateDeliverabilityTestReportResponse withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}