package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetSchedulesScheduleFSubIdDefaultApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code")
    public String actionCode;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withActionCode(String actionCode) {
        this.actionCode = actionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code_full")
    public String actionCodeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withActionCodeFull(String actionCodeFull) {
        this.actionCodeFull = actionCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregate_general_election_expenditure")
    public String aggregateGeneralElectionExpenditure;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withAggregateGeneralElectionExpenditure(String aggregateGeneralElectionExpenditure) {
        this.aggregateGeneralElectionExpenditure = aggregateGeneralElectionExpenditure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_schedule_name")
    public String backReferenceScheduleName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withBackReferenceScheduleName(String backReferenceScheduleName) {
        this.backReferenceScheduleName = backReferenceScheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_transaction_id")
    public String backReferenceTransactionId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withBackReferenceTransactionId(String backReferenceTransactionId) {
        this.backReferenceTransactionId = backReferenceTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_middle_name")
    public String candidateMiddleName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateMiddleName(String candidateMiddleName) {
        this.candidateMiddleName = candidateMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office")
    public String candidateOffice;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateOffice(String candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_district")
    public String candidateOfficeDistrict;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateOfficeDistrict(String candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_full")
    public String candidateOfficeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateOfficeFull(String candidateOfficeFull) {
        this.candidateOfficeFull = candidateOfficeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state")
    public String candidateOfficeState;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateOfficeState(String candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state_full")
    public String candidateOfficeStateFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateOfficeStateFull(String candidateOfficeStateFull) {
        this.candidateOfficeStateFull = candidateOfficeStateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_prefix")
    public String candidatePrefix;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidatePrefix(String candidatePrefix) {
        this.candidatePrefix = candidatePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_suffix")
    public String candidateSuffix;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCandidateSuffix(String candidateSuffix) {
        this.candidateSuffix = candidateSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catolog_code")
    public String catologCode;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCatologCode(String catologCode) {
        this.catologCode = catologCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catolog_code_full")
    public String catologCodeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCatologCodeFull(String catologCodeFull) {
        this.catologCodeFull = catologCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public openapisdk.models.shared.CommitteeHistory committee;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCommittee(openapisdk.models.shared.CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_designated_coordinated_expenditure_indicator")
    public String committeeDesignatedCoordinatedExpenditureIndicator;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCommitteeDesignatedCoordinatedExpenditureIndicator(String committeeDesignatedCoordinatedExpenditureIndicator) {
        this.committeeDesignatedCoordinatedExpenditureIndicator = committeeDesignatedCoordinatedExpenditureIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_city")
    public String conduitCommitteeCity;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeCity(String conduitCommitteeCity) {
        this.conduitCommitteeCity = conduitCommitteeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_id")
    public String conduitCommitteeId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeId(String conduitCommitteeId) {
        this.conduitCommitteeId = conduitCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_name")
    public String conduitCommitteeName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeName(String conduitCommitteeName) {
        this.conduitCommitteeName = conduitCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_state")
    public String conduitCommitteeState;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeState(String conduitCommitteeState) {
        this.conduitCommitteeState = conduitCommitteeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street1")
    public String conduitCommitteeStreet1;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeStreet1(String conduitCommitteeStreet1) {
        this.conduitCommitteeStreet1 = conduitCommitteeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street2")
    public String conduitCommitteeStreet2;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeStreet2(String conduitCommitteeStreet2) {
        this.conduitCommitteeStreet2 = conduitCommitteeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_zip")
    public Integer conduitCommitteeZip;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withConduitCommitteeZip(Integer conduitCommitteeZip) {
        this.conduitCommitteeZip = conduitCommitteeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designated_committee_id")
    public String designatedCommitteeId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withDesignatedCommitteeId(String designatedCommitteeId) {
        this.designatedCommitteeId = designatedCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designated_committee_name")
    public String designatedCommitteeName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withDesignatedCommitteeName(String designatedCommitteeName) {
        this.designatedCommitteeName = designatedCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_cycle")
    public Integer electionCycle;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withElectionCycle(Integer electionCycle) {
        this.electionCycle = electionCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type_desc")
    public String entityTypeDesc;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withEntityTypeDesc(String entityTypeDesc) {
        this.entityTypeDesc = entityTypeDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_amount")
    public Integer expenditureAmount;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withExpenditureAmount(Integer expenditureAmount) {
        this.expenditureAmount = expenditureAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expenditure_date")
    public OffsetDateTime expenditureDate;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withExpenditureDate(OffsetDateTime expenditureDate) {
        this.expenditureDate = expenditureDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_purpose_full")
    public String expenditurePurposeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withExpenditurePurposeFull(String expenditurePurposeFull) {
        this.expenditurePurposeFull = expenditurePurposeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_type")
    public String expenditureType;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withExpenditureType(String expenditureType) {
        this.expenditureType = expenditureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_type_full")
    public String expenditureTypeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withExpenditureTypeFull(String expenditureTypeFull) {
        this.expenditureTypeFull = expenditureTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_form")
    public String filingForm;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withFilingForm(String filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Integer linkId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withLinkId(Integer linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code")
    public String memoCode;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withMemoCode(String memoCode) {
        this.memoCode = memoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code_full")
    public String memoCodeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withMemoCodeFull(String memoCodeFull) {
        this.memoCodeFull = memoCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_text")
    public String memoText;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withMemoText(String memoText) {
        this.memoText = memoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_sub_id")
    public Integer originalSubId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withOriginalSubId(Integer originalSubId) {
        this.originalSubId = originalSubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_first_name")
    public String payeeFirstName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withPayeeFirstName(String payeeFirstName) {
        this.payeeFirstName = payeeFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_last_name")
    public String payeeLastName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withPayeeLastName(String payeeLastName) {
        this.payeeLastName = payeeLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_middle_name")
    public String payeeMiddleName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withPayeeMiddleName(String payeeMiddleName) {
        this.payeeMiddleName = payeeMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public String scheduleType;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withScheduleType(String scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type_full")
    public String scheduleTypeFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withScheduleTypeFull(String scheduleTypeFull) {
        this.scheduleTypeFull = scheduleTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinate_committee")
    public openapisdk.models.shared.CommitteeHistory subordinateCommittee;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withSubordinateCommittee(openapisdk.models.shared.CommitteeHistory subordinateCommittee) {
        this.subordinateCommittee = subordinateCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinate_committee_id")
    public String subordinateCommitteeId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withSubordinateCommitteeId(String subordinateCommitteeId) {
        this.subordinateCommitteeId = subordinateCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited_spending_flag")
    public String unlimitedSpendingFlag;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withUnlimitedSpendingFlag(String unlimitedSpendingFlag) {
        this.unlimitedSpendingFlag = unlimitedSpendingFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited_spending_flag_full")
    public String unlimitedSpendingFlagFull;
    public GetSchedulesScheduleFSubIdDefaultApplicationJsonResults withUnlimitedSpendingFlagFull(String unlimitedSpendingFlagFull) {
        this.unlimitedSpendingFlagFull = unlimitedSpendingFlagFull;
        return this;
    }
}