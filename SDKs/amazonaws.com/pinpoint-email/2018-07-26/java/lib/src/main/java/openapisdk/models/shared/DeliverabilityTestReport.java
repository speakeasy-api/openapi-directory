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
 * DeliverabilityTestReport
 * An object that contains metadata related to a predictive inbox placement test.
**/
public class DeliverabilityTestReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateDate")
    public OffsetDateTime createDate;
    public DeliverabilityTestReport withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliverabilityTestStatus")
    public DeliverabilityTestStatusEnum deliverabilityTestStatus;
    public DeliverabilityTestReport withDeliverabilityTestStatus(DeliverabilityTestStatusEnum deliverabilityTestStatus) {
        this.deliverabilityTestStatus = deliverabilityTestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public DeliverabilityTestReport withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportId")
    public String reportId;
    public DeliverabilityTestReport withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportName")
    public String reportName;
    public DeliverabilityTestReport withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public String subject;
    public DeliverabilityTestReport withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}