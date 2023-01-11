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

public class ScheduleAEfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_indicator")
    public String amendmentIndicator;
    public ScheduleAEfile withAmendmentIndicator(String amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_schedule_name")
    public String backReferenceScheduleName;
    public ScheduleAEfile withBackReferenceScheduleName(String backReferenceScheduleName) {
        this.backReferenceScheduleName = backReferenceScheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_transaction_id")
    public String backReferenceTransactionId;
    public ScheduleAEfile withBackReferenceTransactionId(String backReferenceTransactionId) {
        this.backReferenceTransactionId = backReferenceTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginning_image_number")
    public String beginningImageNumber;
    public ScheduleAEfile withBeginningImageNumber(String beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public CommitteeHistory committee;
    public ScheduleAEfile withCommittee(CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleAEfile withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_city")
    public String conduitCommitteeCity;
    public ScheduleAEfile withConduitCommitteeCity(String conduitCommitteeCity) {
        this.conduitCommitteeCity = conduitCommitteeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_id")
    public String conduitCommitteeId;
    public ScheduleAEfile withConduitCommitteeId(String conduitCommitteeId) {
        this.conduitCommitteeId = conduitCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_name")
    public String conduitCommitteeName;
    public ScheduleAEfile withConduitCommitteeName(String conduitCommitteeName) {
        this.conduitCommitteeName = conduitCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_state")
    public String conduitCommitteeState;
    public ScheduleAEfile withConduitCommitteeState(String conduitCommitteeState) {
        this.conduitCommitteeState = conduitCommitteeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street1")
    public String conduitCommitteeStreet1;
    public ScheduleAEfile withConduitCommitteeStreet1(String conduitCommitteeStreet1) {
        this.conduitCommitteeStreet1 = conduitCommitteeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street2")
    public String conduitCommitteeStreet2;
    public ScheduleAEfile withConduitCommitteeStreet2(String conduitCommitteeStreet2) {
        this.conduitCommitteeStreet2 = conduitCommitteeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_zip")
    public Integer conduitCommitteeZip;
    public ScheduleAEfile withConduitCommitteeZip(Integer conduitCommitteeZip) {
        this.conduitCommitteeZip = conduitCommitteeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_receipt_amount")
    public Double contributionReceiptAmount;
    public ScheduleAEfile withContributionReceiptAmount(Double contributionReceiptAmount) {
        this.contributionReceiptAmount = contributionReceiptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_receipt_date")
    public LocalDate contributionReceiptDate;
    public ScheduleAEfile withContributionReceiptDate(LocalDate contributionReceiptDate) {
        this.contributionReceiptDate = contributionReceiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_aggregate_ytd")
    public Double contributorAggregateYtd;
    public ScheduleAEfile withContributorAggregateYtd(Double contributorAggregateYtd) {
        this.contributorAggregateYtd = contributorAggregateYtd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_city")
    public String contributorCity;
    public ScheduleAEfile withContributorCity(String contributorCity) {
        this.contributorCity = contributorCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_employer")
    public String contributorEmployer;
    public ScheduleAEfile withContributorEmployer(String contributorEmployer) {
        this.contributorEmployer = contributorEmployer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_first_name")
    public String contributorFirstName;
    public ScheduleAEfile withContributorFirstName(String contributorFirstName) {
        this.contributorFirstName = contributorFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_last_name")
    public String contributorLastName;
    public ScheduleAEfile withContributorLastName(String contributorLastName) {
        this.contributorLastName = contributorLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_middle_name")
    public String contributorMiddleName;
    public ScheduleAEfile withContributorMiddleName(String contributorMiddleName) {
        this.contributorMiddleName = contributorMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_name")
    public String contributorName;
    public ScheduleAEfile withContributorName(String contributorName) {
        this.contributorName = contributorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_occupation")
    public String contributorOccupation;
    public ScheduleAEfile withContributorOccupation(String contributorOccupation) {
        this.contributorOccupation = contributorOccupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_prefix")
    public String contributorPrefix;
    public ScheduleAEfile withContributorPrefix(String contributorPrefix) {
        this.contributorPrefix = contributorPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_state")
    public String contributorState;
    public ScheduleAEfile withContributorState(String contributorState) {
        this.contributorState = contributorState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_suffix")
    public String contributorSuffix;
    public ScheduleAEfile withContributorSuffix(String contributorSuffix) {
        this.contributorSuffix = contributorSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_zip")
    public String contributorZip;
    public ScheduleAEfile withContributorZip(String contributorZip) {
        this.contributorZip = contributorZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv_url")
    public String csvUrl;
    public ScheduleAEfile withCsvUrl(String csvUrl) {
        this.csvUrl = csvUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleAEfile withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public ScheduleAEfile withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_election_type_desc")
    public String fecElectionTypeDesc;
    public ScheduleAEfile withFecElectionTypeDesc(String fecElectionTypeDesc) {
        this.fecElectionTypeDesc = fecElectionTypeDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_url")
    public String fecUrl;
    public ScheduleAEfile withFecUrl(String fecUrl) {
        this.fecUrl = fecUrl;
        return this;
    }
    @JsonProperty("file_number")
    public Integer fileNumber;
    public ScheduleAEfile withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing")
    public EFilings filing;
    public ScheduleAEfile withFiling(EFilings filing) {
        this.filing = filing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public ScheduleAEfile withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public ScheduleAEfile withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_timestamp")
    public OffsetDateTime loadTimestamp;
    public ScheduleAEfile withLoadTimestamp(OffsetDateTime loadTimestamp) {
        this.loadTimestamp = loadTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code")
    public String memoCode;
    public ScheduleAEfile withMemoCode(String memoCode) {
        this.memoCode = memoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_text")
    public String memoText;
    public ScheduleAEfile withMemoText(String memoText) {
        this.memoText = memoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public ScheduleAEfile withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pgo")
    public String pgo;
    public ScheduleAEfile withPgo(String pgo) {
        this.pgo = pgo;
        return this;
    }
    @JsonProperty("related_line_number")
    public Integer relatedLineNumber;
    public ScheduleAEfile withRelatedLineNumber(Integer relatedLineNumber) {
        this.relatedLineNumber = relatedLineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public ScheduleAEfile withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public ScheduleAEfile withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}