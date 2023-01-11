package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeliverabilityTestReportRequestBody {
    @JsonProperty("Content")
    public CreateDeliverabilityTestReportRequestBodyContent content;
    public CreateDeliverabilityTestReportRequestBody withContent(CreateDeliverabilityTestReportRequestBodyContent content) {
        this.content = content;
        return this;
    }
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public CreateDeliverabilityTestReportRequestBody withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportName")
    public String reportName;
    public CreateDeliverabilityTestReportRequestBody withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDeliverabilityTestReportRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}