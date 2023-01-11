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

public class ScheduleA {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_indicator")
    public String amendmentIndicator;
    public ScheduleA withAmendmentIndicator(String amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_indicator_desc")
    public String amendmentIndicatorDesc;
    public ScheduleA withAmendmentIndicatorDesc(String amendmentIndicatorDesc) {
        this.amendmentIndicatorDesc = amendmentIndicatorDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_schedule_name")
    public String backReferenceScheduleName;
    public ScheduleA withBackReferenceScheduleName(String backReferenceScheduleName) {
        this.backReferenceScheduleName = backReferenceScheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_transaction_id")
    public String backReferenceTransactionId;
    public ScheduleA withBackReferenceTransactionId(String backReferenceTransactionId) {
        this.backReferenceTransactionId = backReferenceTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public ScheduleA withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public ScheduleA withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public ScheduleA withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_middle_name")
    public String candidateMiddleName;
    public ScheduleA withCandidateMiddleName(String candidateMiddleName) {
        this.candidateMiddleName = candidateMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public ScheduleA withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office")
    public String candidateOffice;
    public ScheduleA withCandidateOffice(String candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_district")
    public String candidateOfficeDistrict;
    public ScheduleA withCandidateOfficeDistrict(String candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_full")
    public String candidateOfficeFull;
    public ScheduleA withCandidateOfficeFull(String candidateOfficeFull) {
        this.candidateOfficeFull = candidateOfficeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state")
    public String candidateOfficeState;
    public ScheduleA withCandidateOfficeState(String candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state_full")
    public String candidateOfficeStateFull;
    public ScheduleA withCandidateOfficeStateFull(String candidateOfficeStateFull) {
        this.candidateOfficeStateFull = candidateOfficeStateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_prefix")
    public String candidatePrefix;
    public ScheduleA withCandidatePrefix(String candidatePrefix) {
        this.candidatePrefix = candidatePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_suffix")
    public String candidateSuffix;
    public ScheduleA withCandidateSuffix(String candidateSuffix) {
        this.candidateSuffix = candidateSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public CommitteeHistory committee;
    public ScheduleA withCommittee(CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleA withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public ScheduleA withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_city")
    public String conduitCommitteeCity;
    public ScheduleA withConduitCommitteeCity(String conduitCommitteeCity) {
        this.conduitCommitteeCity = conduitCommitteeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_id")
    public String conduitCommitteeId;
    public ScheduleA withConduitCommitteeId(String conduitCommitteeId) {
        this.conduitCommitteeId = conduitCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_name")
    public String conduitCommitteeName;
    public ScheduleA withConduitCommitteeName(String conduitCommitteeName) {
        this.conduitCommitteeName = conduitCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_state")
    public String conduitCommitteeState;
    public ScheduleA withConduitCommitteeState(String conduitCommitteeState) {
        this.conduitCommitteeState = conduitCommitteeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street1")
    public String conduitCommitteeStreet1;
    public ScheduleA withConduitCommitteeStreet1(String conduitCommitteeStreet1) {
        this.conduitCommitteeStreet1 = conduitCommitteeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street2")
    public String conduitCommitteeStreet2;
    public ScheduleA withConduitCommitteeStreet2(String conduitCommitteeStreet2) {
        this.conduitCommitteeStreet2 = conduitCommitteeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_zip")
    public Integer conduitCommitteeZip;
    public ScheduleA withConduitCommitteeZip(Integer conduitCommitteeZip) {
        this.conduitCommitteeZip = conduitCommitteeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_receipt_amount")
    public Double contributionReceiptAmount;
    public ScheduleA withContributionReceiptAmount(Double contributionReceiptAmount) {
        this.contributionReceiptAmount = contributionReceiptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_receipt_date")
    public LocalDate contributionReceiptDate;
    public ScheduleA withContributionReceiptDate(LocalDate contributionReceiptDate) {
        this.contributionReceiptDate = contributionReceiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor")
    public CommitteeHistory contributor;
    public ScheduleA withContributor(CommitteeHistory contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_aggregate_ytd")
    public Double contributorAggregateYtd;
    public ScheduleA withContributorAggregateYtd(Double contributorAggregateYtd) {
        this.contributorAggregateYtd = contributorAggregateYtd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_city")
    public String contributorCity;
    public ScheduleA withContributorCity(String contributorCity) {
        this.contributorCity = contributorCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_employer")
    public String contributorEmployer;
    public ScheduleA withContributorEmployer(String contributorEmployer) {
        this.contributorEmployer = contributorEmployer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_first_name")
    public String contributorFirstName;
    public ScheduleA withContributorFirstName(String contributorFirstName) {
        this.contributorFirstName = contributorFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_id")
    public String contributorId;
    public ScheduleA withContributorId(String contributorId) {
        this.contributorId = contributorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_last_name")
    public String contributorLastName;
    public ScheduleA withContributorLastName(String contributorLastName) {
        this.contributorLastName = contributorLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_middle_name")
    public String contributorMiddleName;
    public ScheduleA withContributorMiddleName(String contributorMiddleName) {
        this.contributorMiddleName = contributorMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_name")
    public String contributorName;
    public ScheduleA withContributorName(String contributorName) {
        this.contributorName = contributorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_occupation")
    public String contributorOccupation;
    public ScheduleA withContributorOccupation(String contributorOccupation) {
        this.contributorOccupation = contributorOccupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_prefix")
    public String contributorPrefix;
    public ScheduleA withContributorPrefix(String contributorPrefix) {
        this.contributorPrefix = contributorPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_state")
    public String contributorState;
    public ScheduleA withContributorState(String contributorState) {
        this.contributorState = contributorState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_street_1")
    public String contributorStreet1;
    public ScheduleA withContributorStreet1(String contributorStreet1) {
        this.contributorStreet1 = contributorStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_street_2")
    public String contributorStreet2;
    public ScheduleA withContributorStreet2(String contributorStreet2) {
        this.contributorStreet2 = contributorStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_suffix")
    public String contributorSuffix;
    public ScheduleA withContributorSuffix(String contributorSuffix) {
        this.contributorSuffix = contributorSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_zip")
    public String contributorZip;
    public ScheduleA withContributorZip(String contributorZip) {
        this.contributorZip = contributorZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("donor_committee_name")
    public String donorCommitteeName;
    public ScheduleA withDonorCommitteeName(String donorCommitteeName) {
        this.donorCommitteeName = donorCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type")
    public String electionType;
    public ScheduleA withElectionType(String electionType) {
        this.electionType = electionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type_full")
    public String electionTypeFull;
    public ScheduleA withElectionTypeFull(String electionTypeFull) {
        this.electionTypeFull = electionTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public ScheduleA withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type_desc")
    public String entityTypeDesc;
    public ScheduleA withEntityTypeDesc(String entityTypeDesc) {
        this.entityTypeDesc = entityTypeDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_election_type_desc")
    public String fecElectionTypeDesc;
    public ScheduleA withFecElectionTypeDesc(String fecElectionTypeDesc) {
        this.fecElectionTypeDesc = fecElectionTypeDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_election_year")
    public String fecElectionYear;
    public ScheduleA withFecElectionYear(String fecElectionYear) {
        this.fecElectionYear = fecElectionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public ScheduleA withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_form")
    public String filingForm;
    public ScheduleA withFilingForm(String filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public ScheduleA withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("increased_limit")
    public String increasedLimit;
    public ScheduleA withIncreasedLimit(String increasedLimit) {
        this.increasedLimit = increasedLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_individual")
    public Boolean isIndividual;
    public ScheduleA withIsIndividual(Boolean isIndividual) {
        this.isIndividual = isIndividual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public ScheduleA withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number_label")
    public String lineNumberLabel;
    public ScheduleA withLineNumberLabel(String lineNumberLabel) {
        this.lineNumberLabel = lineNumberLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Integer linkId;
    public ScheduleA withLinkId(Integer linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public ScheduleA withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code")
    public String memoCode;
    public ScheduleA withMemoCode(String memoCode) {
        this.memoCode = memoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code_full")
    public String memoCodeFull;
    public ScheduleA withMemoCodeFull(String memoCodeFull) {
        this.memoCodeFull = memoCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_text")
    public String memoText;
    public ScheduleA withMemoText(String memoText) {
        this.memoText = memoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoed_subtotal")
    public Boolean memoedSubtotal;
    public ScheduleA withMemoedSubtotal(Boolean memoedSubtotal) {
        this.memoedSubtotal = memoedSubtotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_committee_nonfederal_account")
    public String nationalCommitteeNonfederalAccount;
    public ScheduleA withNationalCommitteeNonfederalAccount(String nationalCommitteeNonfederalAccount) {
        this.nationalCommitteeNonfederalAccount = nationalCommitteeNonfederalAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_sub_id")
    public String originalSubId;
    public ScheduleA withOriginalSubId(String originalSubId) {
        this.originalSubId = originalSubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public ScheduleA withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_type")
    public String receiptType;
    public ScheduleA withReceiptType(String receiptType) {
        this.receiptType = receiptType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_type_desc")
    public String receiptTypeDesc;
    public ScheduleA withReceiptTypeDesc(String receiptTypeDesc) {
        this.receiptTypeDesc = receiptTypeDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_type_full")
    public String receiptTypeFull;
    public ScheduleA withReceiptTypeFull(String receiptTypeFull) {
        this.receiptTypeFull = receiptTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient_committee_designation")
    public String recipientCommitteeDesignation;
    public ScheduleA withRecipientCommitteeDesignation(String recipientCommitteeDesignation) {
        this.recipientCommitteeDesignation = recipientCommitteeDesignation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient_committee_org_type")
    public String recipientCommitteeOrgType;
    public ScheduleA withRecipientCommitteeOrgType(String recipientCommitteeOrgType) {
        this.recipientCommitteeOrgType = recipientCommitteeOrgType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient_committee_type")
    public String recipientCommitteeType;
    public ScheduleA withRecipientCommitteeType(String recipientCommitteeType) {
        this.recipientCommitteeType = recipientCommitteeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public ScheduleA withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public ScheduleA withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public String scheduleType;
    public ScheduleA withScheduleType(String scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type_full")
    public String scheduleTypeFull;
    public ScheduleA withScheduleTypeFull(String scheduleTypeFull) {
        this.scheduleTypeFull = scheduleTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public ScheduleA withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public ScheduleA withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("two_year_transaction_period")
    public Integer twoYearTransactionPeriod;
    public ScheduleA withTwoYearTransactionPeriod(Integer twoYearTransactionPeriod) {
        this.twoYearTransactionPeriod = twoYearTransactionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unused_contbr_id")
    public String unusedContbrId;
    public ScheduleA withUnusedContbrId(String unusedContbrId) {
        this.unusedContbrId = unusedContbrId;
        return this;
    }
}