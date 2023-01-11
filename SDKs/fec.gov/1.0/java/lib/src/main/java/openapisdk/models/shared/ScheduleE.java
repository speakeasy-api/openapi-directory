package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleE {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code")
    public String actionCode;
    public ScheduleE withActionCode(String actionCode) {
        this.actionCode = actionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code_full")
    public String actionCodeFull;
    public ScheduleE withActionCodeFull(String actionCodeFull) {
        this.actionCodeFull = actionCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_indicator")
    public String amendmentIndicator;
    public ScheduleE withAmendmentIndicator(String amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_number")
    public Integer amendmentNumber;
    public ScheduleE withAmendmentNumber(Integer amendmentNumber) {
        this.amendmentNumber = amendmentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_schedule_name")
    public String backReferenceScheduleName;
    public ScheduleE withBackReferenceScheduleName(String backReferenceScheduleName) {
        this.backReferenceScheduleName = backReferenceScheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_transaction_id")
    public String backReferenceTransactionId;
    public ScheduleE withBackReferenceTransactionId(String backReferenceTransactionId) {
        this.backReferenceTransactionId = backReferenceTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate")
    public String candidate;
    public ScheduleE withCandidate(String candidate) {
        this.candidate = candidate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public ScheduleE withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public ScheduleE withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public ScheduleE withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_middle_name")
    public String candidateMiddleName;
    public ScheduleE withCandidateMiddleName(String candidateMiddleName) {
        this.candidateMiddleName = candidateMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public ScheduleE withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office")
    public String candidateOffice;
    public ScheduleE withCandidateOffice(String candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_district")
    public String candidateOfficeDistrict;
    public ScheduleE withCandidateOfficeDistrict(String candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state")
    public String candidateOfficeState;
    public ScheduleE withCandidateOfficeState(String candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_party")
    public String candidateParty;
    public ScheduleE withCandidateParty(String candidateParty) {
        this.candidateParty = candidateParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_prefix")
    public String candidatePrefix;
    public ScheduleE withCandidatePrefix(String candidatePrefix) {
        this.candidatePrefix = candidatePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_suffix")
    public String candidateSuffix;
    public ScheduleE withCandidateSuffix(String candidateSuffix) {
        this.candidateSuffix = candidateSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_code")
    public String categoryCode;
    public ScheduleE withCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_code_full")
    public String categoryCodeFull;
    public ScheduleE withCategoryCodeFull(String categoryCodeFull) {
        this.categoryCodeFull = categoryCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public CommitteeHistory committee;
    public ScheduleE withCommittee(CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleE withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_city")
    public String conduitCommitteeCity;
    public ScheduleE withConduitCommitteeCity(String conduitCommitteeCity) {
        this.conduitCommitteeCity = conduitCommitteeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_id")
    public String conduitCommitteeId;
    public ScheduleE withConduitCommitteeId(String conduitCommitteeId) {
        this.conduitCommitteeId = conduitCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_name")
    public String conduitCommitteeName;
    public ScheduleE withConduitCommitteeName(String conduitCommitteeName) {
        this.conduitCommitteeName = conduitCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_state")
    public String conduitCommitteeState;
    public ScheduleE withConduitCommitteeState(String conduitCommitteeState) {
        this.conduitCommitteeState = conduitCommitteeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street1")
    public String conduitCommitteeStreet1;
    public ScheduleE withConduitCommitteeStreet1(String conduitCommitteeStreet1) {
        this.conduitCommitteeStreet1 = conduitCommitteeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street2")
    public String conduitCommitteeStreet2;
    public ScheduleE withConduitCommitteeStreet2(String conduitCommitteeStreet2) {
        this.conduitCommitteeStreet2 = conduitCommitteeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_zip")
    public Integer conduitCommitteeZip;
    public ScheduleE withConduitCommitteeZip(Integer conduitCommitteeZip) {
        this.conduitCommitteeZip = conduitCommitteeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dissemination_date")
    public LocalDate disseminationDate;
    public ScheduleE withDisseminationDate(LocalDate disseminationDate) {
        this.disseminationDate = disseminationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type")
    public String electionType;
    public ScheduleE withElectionType(String electionType) {
        this.electionType = electionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type_full")
    public String electionTypeFull;
    public ScheduleE withElectionTypeFull(String electionTypeFull) {
        this.electionTypeFull = electionTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_amount")
    public Double expenditureAmount;
    public ScheduleE withExpenditureAmount(Double expenditureAmount) {
        this.expenditureAmount = expenditureAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_date")
    public LocalDate expenditureDate;
    public ScheduleE withExpenditureDate(LocalDate expenditureDate) {
        this.expenditureDate = expenditureDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_description")
    public String expenditureDescription;
    public ScheduleE withExpenditureDescription(String expenditureDescription) {
        this.expenditureDescription = expenditureDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public ScheduleE withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filer_first_name")
    public String filerFirstName;
    public ScheduleE withFilerFirstName(String filerFirstName) {
        this.filerFirstName = filerFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filer_last_name")
    public String filerLastName;
    public ScheduleE withFilerLastName(String filerLastName) {
        this.filerLastName = filerLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filer_middle_name")
    public String filerMiddleName;
    public ScheduleE withFilerMiddleName(String filerMiddleName) {
        this.filerMiddleName = filerMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filer_prefix")
    public String filerPrefix;
    public ScheduleE withFilerPrefix(String filerPrefix) {
        this.filerPrefix = filerPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filer_suffix")
    public String filerSuffix;
    public ScheduleE withFilerSuffix(String filerSuffix) {
        this.filerSuffix = filerSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_date")
    public LocalDate filingDate;
    public ScheduleE withFilingDate(LocalDate filingDate) {
        this.filingDate = filingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_form")
    public String filingForm;
    public ScheduleE withFilingForm(String filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public ScheduleE withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independent_sign_date")
    public LocalDate independentSignDate;
    public ScheduleE withIndependentSignDate(LocalDate independentSignDate) {
        this.independentSignDate = independentSignDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independent_sign_name")
    public String independentSignName;
    public ScheduleE withIndependentSignName(String independentSignName) {
        this.independentSignName = independentSignName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_notice")
    public Boolean isNotice;
    public ScheduleE withIsNotice(Boolean isNotice) {
        this.isNotice = isNotice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public ScheduleE withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Integer linkId;
    public ScheduleE withLinkId(Integer linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code")
    public String memoCode;
    public ScheduleE withMemoCode(String memoCode) {
        this.memoCode = memoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code_full")
    public String memoCodeFull;
    public ScheduleE withMemoCodeFull(String memoCodeFull) {
        this.memoCodeFull = memoCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_text")
    public String memoText;
    public ScheduleE withMemoText(String memoText) {
        this.memoText = memoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoed_subtotal")
    public Boolean memoedSubtotal;
    public ScheduleE withMemoedSubtotal(Boolean memoedSubtotal) {
        this.memoedSubtotal = memoedSubtotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent")
    public Boolean mostRecent;
    public ScheduleE withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notary_commission_expiration_date")
    public LocalDate notaryCommissionExpirationDate;
    public ScheduleE withNotaryCommissionExpirationDate(LocalDate notaryCommissionExpirationDate) {
        this.notaryCommissionExpirationDate = notaryCommissionExpirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notary_sign_date")
    public LocalDate notarySignDate;
    public ScheduleE withNotarySignDate(LocalDate notarySignDate) {
        this.notarySignDate = notarySignDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notary_sign_name")
    public String notarySignName;
    public ScheduleE withNotarySignName(String notarySignName) {
        this.notarySignName = notarySignName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_total_ytd")
    public Double officeTotalYtd;
    public ScheduleE withOfficeTotalYtd(Double officeTotalYtd) {
        this.officeTotalYtd = officeTotalYtd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_sub_id")
    public String originalSubId;
    public ScheduleE withOriginalSubId(String originalSubId) {
        this.originalSubId = originalSubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_city")
    public String payeeCity;
    public ScheduleE withPayeeCity(String payeeCity) {
        this.payeeCity = payeeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_first_name")
    public String payeeFirstName;
    public ScheduleE withPayeeFirstName(String payeeFirstName) {
        this.payeeFirstName = payeeFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_last_name")
    public String payeeLastName;
    public ScheduleE withPayeeLastName(String payeeLastName) {
        this.payeeLastName = payeeLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_middle_name")
    public String payeeMiddleName;
    public ScheduleE withPayeeMiddleName(String payeeMiddleName) {
        this.payeeMiddleName = payeeMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public ScheduleE withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_prefix")
    public String payeePrefix;
    public ScheduleE withPayeePrefix(String payeePrefix) {
        this.payeePrefix = payeePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_state")
    public String payeeState;
    public ScheduleE withPayeeState(String payeeState) {
        this.payeeState = payeeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_street_1")
    public String payeeStreet1;
    public ScheduleE withPayeeStreet1(String payeeStreet1) {
        this.payeeStreet1 = payeeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_street_2")
    public String payeeStreet2;
    public ScheduleE withPayeeStreet2(String payeeStreet2) {
        this.payeeStreet2 = payeeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_suffix")
    public String payeeSuffix;
    public ScheduleE withPayeeSuffix(String payeeSuffix) {
        this.payeeSuffix = payeeSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_zip")
    public String payeeZip;
    public ScheduleE withPayeeZip(String payeeZip) {
        this.payeeZip = payeeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public ScheduleE withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_file_number")
    public Integer previousFileNumber;
    public ScheduleE withPreviousFileNumber(Integer previousFileNumber) {
        this.previousFileNumber = previousFileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public ScheduleE withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public ScheduleE withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public String scheduleType;
    public ScheduleE withScheduleType(String scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type_full")
    public String scheduleTypeFull;
    public ScheduleE withScheduleTypeFull(String scheduleTypeFull) {
        this.scheduleTypeFull = scheduleTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public ScheduleE withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_oppose_indicator")
    public String supportOpposeIndicator;
    public ScheduleE withSupportOpposeIndicator(String supportOpposeIndicator) {
        this.supportOpposeIndicator = supportOpposeIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public ScheduleE withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}