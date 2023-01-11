package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetSchedulesScheduleCDefaultApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code")
    public String actionCode;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withActionCode(String actionCode) {
        this.actionCode = actionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code_full")
    public String actionCodeFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withActionCodeFull(String actionCodeFull) {
        this.actionCodeFull = actionCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_middle_name")
    public String candidateMiddleName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateMiddleName(String candidateMiddleName) {
        this.candidateMiddleName = candidateMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office")
    public String candidateOffice;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateOffice(String candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_district")
    public String candidateOfficeDistrict;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateOfficeDistrict(String candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_full")
    public String candidateOfficeFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateOfficeFull(String candidateOfficeFull) {
        this.candidateOfficeFull = candidateOfficeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state")
    public String candidateOfficeState;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateOfficeState(String candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state_full")
    public String candidateOfficeStateFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateOfficeStateFull(String candidateOfficeStateFull) {
        this.candidateOfficeStateFull = candidateOfficeStateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_prefix")
    public String candidatePrefix;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidatePrefix(String candidatePrefix) {
        this.candidatePrefix = candidatePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_suffix")
    public String candidateSuffix;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCandidateSuffix(String candidateSuffix) {
        this.candidateSuffix = candidateSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public openapisdk.models.shared.CommitteeHistory committee;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCommittee(openapisdk.models.shared.CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_date_terms")
    public String dueDateTerms;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withDueDateTerms(String dueDateTerms) {
        this.dueDateTerms = dueDateTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type")
    public String electionType;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withElectionType(String electionType) {
        this.electionType = electionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type_full")
    public String electionTypeFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withElectionTypeFull(String electionTypeFull) {
        this.electionTypeFull = electionTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type_full")
    public String entityTypeFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withEntityTypeFull(String entityTypeFull) {
        this.entityTypeFull = entityTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_committee_id")
    public String fecCommitteeId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withFecCommitteeId(String fecCommitteeId) {
        this.fecCommitteeId = fecCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_election_type_full")
    public String fecElectionTypeFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withFecElectionTypeFull(String fecElectionTypeFull) {
        this.fecElectionTypeFull = fecElectionTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_election_type_year")
    public String fecElectionTypeYear;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withFecElectionTypeYear(String fecElectionTypeYear) {
        this.fecElectionTypeYear = fecElectionTypeYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_form")
    public String filingForm;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withFilingForm(String filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incurred_date")
    public LocalDate incurredDate;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withIncurredDate(LocalDate incurredDate) {
        this.incurredDate = incurredDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interest_rate_terms")
    public String interestRateTerms;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withInterestRateTerms(String interestRateTerms) {
        this.interestRateTerms = interestRateTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Integer linkId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLinkId(Integer linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_balance")
    public Float loanBalance;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanBalance(Float loanBalance) {
        this.loanBalance = loanBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_city")
    public String loanSourceCity;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceCity(String loanSourceCity) {
        this.loanSourceCity = loanSourceCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_first_name")
    public String loanSourceFirstName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceFirstName(String loanSourceFirstName) {
        this.loanSourceFirstName = loanSourceFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_last_name")
    public String loanSourceLastName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceLastName(String loanSourceLastName) {
        this.loanSourceLastName = loanSourceLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_middle_name")
    public String loanSourceMiddleName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceMiddleName(String loanSourceMiddleName) {
        this.loanSourceMiddleName = loanSourceMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_name")
    public String loanSourceName;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceName(String loanSourceName) {
        this.loanSourceName = loanSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_prefix")
    public String loanSourcePrefix;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourcePrefix(String loanSourcePrefix) {
        this.loanSourcePrefix = loanSourcePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_state")
    public String loanSourceState;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceState(String loanSourceState) {
        this.loanSourceState = loanSourceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_street_1")
    public String loanSourceStreet1;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceStreet1(String loanSourceStreet1) {
        this.loanSourceStreet1 = loanSourceStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_street_2")
    public String loanSourceStreet2;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceStreet2(String loanSourceStreet2) {
        this.loanSourceStreet2 = loanSourceStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_suffix")
    public String loanSourceSuffix;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceSuffix(String loanSourceSuffix) {
        this.loanSourceSuffix = loanSourceSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_source_zip")
    public Integer loanSourceZip;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withLoanSourceZip(Integer loanSourceZip) {
        this.loanSourceZip = loanSourceZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code")
    public String memoCode;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withMemoCode(String memoCode) {
        this.memoCode = memoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_text")
    public String memoText;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withMemoText(String memoText) {
        this.memoText = memoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_loan_amount")
    public Float originalLoanAmount;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withOriginalLoanAmount(Float originalLoanAmount) {
        this.originalLoanAmount = originalLoanAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_sub_id")
    public Integer originalSubId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withOriginalSubId(Integer originalSubId) {
        this.originalSubId = originalSubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_to_date")
    public Float paymentToDate;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withPaymentToDate(Float paymentToDate) {
        this.paymentToDate = paymentToDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personally_funded")
    public String personallyFunded;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withPersonallyFunded(String personallyFunded) {
        this.personallyFunded = personallyFunded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_a_line_number")
    public Integer scheduleALineNumber;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withScheduleALineNumber(Integer scheduleALineNumber) {
        this.scheduleALineNumber = scheduleALineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public String scheduleType;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withScheduleType(String scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type_full")
    public String scheduleTypeFull;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withScheduleTypeFull(String scheduleTypeFull) {
        this.scheduleTypeFull = scheduleTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secured_ind")
    public String securedInd;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withSecuredInd(String securedInd) {
        this.securedInd = securedInd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public GetSchedulesScheduleCDefaultApplicationJsonResults withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}