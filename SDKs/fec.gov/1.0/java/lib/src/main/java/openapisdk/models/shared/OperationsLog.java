package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OperationsLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_indicator")
    public String amendmentIndicator;
    public OperationsLog withAmendmentIndicator(String amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginning_image_number")
    public String beginningImageNumber;
    public OperationsLog withBeginningImageNumber(String beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_committee_id")
    public String candidateCommitteeId;
    public OperationsLog withCandidateCommitteeId(String candidateCommitteeId) {
        this.candidateCommitteeId = candidateCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("coverage_end_date")
    public OffsetDateTime coverageEndDate;
    public OperationsLog withCoverageEndDate(OffsetDateTime coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("coverage_start_date")
    public OffsetDateTime coverageStartDate;
    public OperationsLog withCoverageStartDate(OffsetDateTime coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ending_image_number")
    public String endingImageNumber;
    public OperationsLog withEndingImageNumber(String endingImageNumber) {
        this.endingImageNumber = endingImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_type")
    public String formType;
    public OperationsLog withFormType(String formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("receipt_date")
    public OffsetDateTime receiptDate;
    public OperationsLog withReceiptDate(OffsetDateTime receiptDate) {
        this.receiptDate = receiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public OperationsLog withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public OperationsLog withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_num")
    public Integer statusNum;
    public OperationsLog withStatusNum(Integer statusNum) {
        this.statusNum = statusNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public Integer subId;
    public OperationsLog withSubId(Integer subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("summary_data_complete_date")
    public OffsetDateTime summaryDataCompleteDate;
    public OperationsLog withSummaryDataCompleteDate(OffsetDateTime summaryDataCompleteDate) {
        this.summaryDataCompleteDate = summaryDataCompleteDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("summary_data_verification_date")
    public OffsetDateTime summaryDataVerificationDate;
    public OperationsLog withSummaryDataVerificationDate(OffsetDateTime summaryDataVerificationDate) {
        this.summaryDataVerificationDate = summaryDataVerificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_data_complete_date")
    public LocalDate transactionDataCompleteDate;
    public OperationsLog withTransactionDataCompleteDate(LocalDate transactionDataCompleteDate) {
        this.transactionDataCompleteDate = transactionDataCompleteDate;
        return this;
    }
}