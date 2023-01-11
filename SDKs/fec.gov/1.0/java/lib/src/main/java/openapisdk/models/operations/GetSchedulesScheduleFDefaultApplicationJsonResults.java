package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetSchedulesScheduleFDefaultApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code")
    public String actionCode;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withActionCode(String actionCode) {
        this.actionCode = actionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code_full")
    public String actionCodeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withActionCodeFull(String actionCodeFull) {
        this.actionCodeFull = actionCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregate_general_election_expenditure")
    public String aggregateGeneralElectionExpenditure;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withAggregateGeneralElectionExpenditure(String aggregateGeneralElectionExpenditure) {
        this.aggregateGeneralElectionExpenditure = aggregateGeneralElectionExpenditure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_schedule_name")
    public String backReferenceScheduleName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withBackReferenceScheduleName(String backReferenceScheduleName) {
        this.backReferenceScheduleName = backReferenceScheduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("back_reference_transaction_id")
    public String backReferenceTransactionId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withBackReferenceTransactionId(String backReferenceTransactionId) {
        this.backReferenceTransactionId = backReferenceTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_middle_name")
    public String candidateMiddleName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateMiddleName(String candidateMiddleName) {
        this.candidateMiddleName = candidateMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office")
    public String candidateOffice;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateOffice(String candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_district")
    public String candidateOfficeDistrict;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateOfficeDistrict(String candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_full")
    public String candidateOfficeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateOfficeFull(String candidateOfficeFull) {
        this.candidateOfficeFull = candidateOfficeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state")
    public String candidateOfficeState;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateOfficeState(String candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state_full")
    public String candidateOfficeStateFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateOfficeStateFull(String candidateOfficeStateFull) {
        this.candidateOfficeStateFull = candidateOfficeStateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_prefix")
    public String candidatePrefix;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidatePrefix(String candidatePrefix) {
        this.candidatePrefix = candidatePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_suffix")
    public String candidateSuffix;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCandidateSuffix(String candidateSuffix) {
        this.candidateSuffix = candidateSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catolog_code")
    public String catologCode;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCatologCode(String catologCode) {
        this.catologCode = catologCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catolog_code_full")
    public String catologCodeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCatologCodeFull(String catologCodeFull) {
        this.catologCodeFull = catologCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public openapisdk.models.shared.CommitteeHistory committee;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCommittee(openapisdk.models.shared.CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_designated_coordinated_expenditure_indicator")
    public String committeeDesignatedCoordinatedExpenditureIndicator;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCommitteeDesignatedCoordinatedExpenditureIndicator(String committeeDesignatedCoordinatedExpenditureIndicator) {
        this.committeeDesignatedCoordinatedExpenditureIndicator = committeeDesignatedCoordinatedExpenditureIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_city")
    public String conduitCommitteeCity;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeCity(String conduitCommitteeCity) {
        this.conduitCommitteeCity = conduitCommitteeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_id")
    public String conduitCommitteeId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeId(String conduitCommitteeId) {
        this.conduitCommitteeId = conduitCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_name")
    public String conduitCommitteeName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeName(String conduitCommitteeName) {
        this.conduitCommitteeName = conduitCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_state")
    public String conduitCommitteeState;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeState(String conduitCommitteeState) {
        this.conduitCommitteeState = conduitCommitteeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street1")
    public String conduitCommitteeStreet1;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeStreet1(String conduitCommitteeStreet1) {
        this.conduitCommitteeStreet1 = conduitCommitteeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street2")
    public String conduitCommitteeStreet2;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeStreet2(String conduitCommitteeStreet2) {
        this.conduitCommitteeStreet2 = conduitCommitteeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_zip")
    public Integer conduitCommitteeZip;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withConduitCommitteeZip(Integer conduitCommitteeZip) {
        this.conduitCommitteeZip = conduitCommitteeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designated_committee_id")
    public String designatedCommitteeId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withDesignatedCommitteeId(String designatedCommitteeId) {
        this.designatedCommitteeId = designatedCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designated_committee_name")
    public String designatedCommitteeName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withDesignatedCommitteeName(String designatedCommitteeName) {
        this.designatedCommitteeName = designatedCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_cycle")
    public Integer electionCycle;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withElectionCycle(Integer electionCycle) {
        this.electionCycle = electionCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type_desc")
    public String entityTypeDesc;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withEntityTypeDesc(String entityTypeDesc) {
        this.entityTypeDesc = entityTypeDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_amount")
    public Integer expenditureAmount;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withExpenditureAmount(Integer expenditureAmount) {
        this.expenditureAmount = expenditureAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expenditure_date")
    public OffsetDateTime expenditureDate;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withExpenditureDate(OffsetDateTime expenditureDate) {
        this.expenditureDate = expenditureDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_purpose_full")
    public String expenditurePurposeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withExpenditurePurposeFull(String expenditurePurposeFull) {
        this.expenditurePurposeFull = expenditurePurposeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_type")
    public String expenditureType;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withExpenditureType(String expenditureType) {
        this.expenditureType = expenditureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expenditure_type_full")
    public String expenditureTypeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withExpenditureTypeFull(String expenditureTypeFull) {
        this.expenditureTypeFull = expenditureTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_form")
    public String filingForm;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withFilingForm(String filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Integer linkId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withLinkId(Integer linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code")
    public String memoCode;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withMemoCode(String memoCode) {
        this.memoCode = memoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_code_full")
    public String memoCodeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withMemoCodeFull(String memoCodeFull) {
        this.memoCodeFull = memoCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_text")
    public String memoText;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withMemoText(String memoText) {
        this.memoText = memoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_sub_id")
    public Integer originalSubId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withOriginalSubId(Integer originalSubId) {
        this.originalSubId = originalSubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_first_name")
    public String payeeFirstName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withPayeeFirstName(String payeeFirstName) {
        this.payeeFirstName = payeeFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_last_name")
    public String payeeLastName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withPayeeLastName(String payeeLastName) {
        this.payeeLastName = payeeLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_middle_name")
    public String payeeMiddleName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withPayeeMiddleName(String payeeMiddleName) {
        this.payeeMiddleName = payeeMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public String scheduleType;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withScheduleType(String scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type_full")
    public String scheduleTypeFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withScheduleTypeFull(String scheduleTypeFull) {
        this.scheduleTypeFull = scheduleTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinate_committee")
    public openapisdk.models.shared.CommitteeHistory subordinateCommittee;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withSubordinateCommittee(openapisdk.models.shared.CommitteeHistory subordinateCommittee) {
        this.subordinateCommittee = subordinateCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinate_committee_id")
    public String subordinateCommitteeId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withSubordinateCommitteeId(String subordinateCommitteeId) {
        this.subordinateCommitteeId = subordinateCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited_spending_flag")
    public String unlimitedSpendingFlag;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withUnlimitedSpendingFlag(String unlimitedSpendingFlag) {
        this.unlimitedSpendingFlag = unlimitedSpendingFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited_spending_flag_full")
    public String unlimitedSpendingFlagFull;
    public GetSchedulesScheduleFDefaultApplicationJsonResults withUnlimitedSpendingFlagFull(String unlimitedSpendingFlagFull) {
        this.unlimitedSpendingFlagFull = unlimitedSpendingFlagFull;
        return this;
    }
}