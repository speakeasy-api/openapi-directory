package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchedulesScheduleDSubIdDefaultApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code")
    public String actionCode;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withActionCode(String actionCode) {
        this.actionCode = actionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_code_full")
    public String actionCodeFull;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withActionCodeFull(String actionCodeFull) {
        this.actionCodeFull = actionCodeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount_incurred_period")
    public Float amountIncurredPeriod;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withAmountIncurredPeriod(Float amountIncurredPeriod) {
        this.amountIncurredPeriod = amountIncurredPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office")
    public String candidateOffice;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateOffice(String candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_district")
    public String candidateOfficeDistrict;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateOfficeDistrict(String candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state")
    public String candidateOfficeState;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateOfficeState(String candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_office_state_full")
    public String candidateOfficeStateFull;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCandidateOfficeStateFull(String candidateOfficeStateFull) {
        this.candidateOfficeStateFull = candidateOfficeStateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canidate_name")
    public String canidateName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCanidateName(String canidateName) {
        this.canidateName = canidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee")
    public openapisdk.models.shared.CommitteeHistory committee;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCommittee(openapisdk.models.shared.CommitteeHistory committee) {
        this.committee = committee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_city")
    public String conduitCommitteeCity;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeCity(String conduitCommitteeCity) {
        this.conduitCommitteeCity = conduitCommitteeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_id")
    public String conduitCommitteeId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeId(String conduitCommitteeId) {
        this.conduitCommitteeId = conduitCommitteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_name")
    public String conduitCommitteeName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeName(String conduitCommitteeName) {
        this.conduitCommitteeName = conduitCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_state")
    public String conduitCommitteeState;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeState(String conduitCommitteeState) {
        this.conduitCommitteeState = conduitCommitteeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street1")
    public String conduitCommitteeStreet1;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeStreet1(String conduitCommitteeStreet1) {
        this.conduitCommitteeStreet1 = conduitCommitteeStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_street2")
    public String conduitCommitteeStreet2;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeStreet2(String conduitCommitteeStreet2) {
        this.conduitCommitteeStreet2 = conduitCommitteeStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conduit_committee_zip")
    public Integer conduitCommitteeZip;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withConduitCommitteeZip(Integer conduitCommitteeZip) {
        this.conduitCommitteeZip = conduitCommitteeZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_city")
    public String creditorDebtorCity;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorCity(String creditorDebtorCity) {
        this.creditorDebtorCity = creditorDebtorCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_first_name")
    public String creditorDebtorFirstName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorFirstName(String creditorDebtorFirstName) {
        this.creditorDebtorFirstName = creditorDebtorFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_id")
    public String creditorDebtorId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorId(String creditorDebtorId) {
        this.creditorDebtorId = creditorDebtorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_last_name")
    public String creditorDebtorLastName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorLastName(String creditorDebtorLastName) {
        this.creditorDebtorLastName = creditorDebtorLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_middle_name")
    public String creditorDebtorMiddleName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorMiddleName(String creditorDebtorMiddleName) {
        this.creditorDebtorMiddleName = creditorDebtorMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_name")
    public String creditorDebtorName;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorName(String creditorDebtorName) {
        this.creditorDebtorName = creditorDebtorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_prefix")
    public String creditorDebtorPrefix;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorPrefix(String creditorDebtorPrefix) {
        this.creditorDebtorPrefix = creditorDebtorPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_state")
    public String creditorDebtorState;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorState(String creditorDebtorState) {
        this.creditorDebtorState = creditorDebtorState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_street1")
    public String creditorDebtorStreet1;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorStreet1(String creditorDebtorStreet1) {
        this.creditorDebtorStreet1 = creditorDebtorStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_street2")
    public String creditorDebtorStreet2;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorStreet2(String creditorDebtorStreet2) {
        this.creditorDebtorStreet2 = creditorDebtorStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditor_debtor_suffix")
    public String creditorDebtorSuffix;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withCreditorDebtorSuffix(String creditorDebtorSuffix) {
        this.creditorDebtorSuffix = creditorDebtorSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_cycle")
    public Integer electionCycle;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withElectionCycle(Integer electionCycle) {
        this.electionCycle = electionCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_form")
    public String filingForm;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withFilingForm(String filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_number")
    public String imageNumber;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withImageNumber(String imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_number")
    public String lineNumber;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Integer linkId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withLinkId(Integer linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_date")
    public LocalDate loadDate;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withLoadDate(LocalDate loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nature_of_debt")
    public String natureOfDebt;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withNatureOfDebt(String natureOfDebt) {
        this.natureOfDebt = natureOfDebt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_sub_id")
    public Integer originalSubId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withOriginalSubId(Integer originalSubId) {
        this.originalSubId = originalSubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outstanding_balance_beginning_of_period")
    public Float outstandingBalanceBeginningOfPeriod;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withOutstandingBalanceBeginningOfPeriod(Float outstandingBalanceBeginningOfPeriod) {
        this.outstandingBalanceBeginningOfPeriod = outstandingBalanceBeginningOfPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outstanding_balance_close_of_period")
    public Float outstandingBalanceCloseOfPeriod;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withOutstandingBalanceCloseOfPeriod(Float outstandingBalanceCloseOfPeriod) {
        this.outstandingBalanceCloseOfPeriod = outstandingBalanceCloseOfPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_period")
    public Float paymentPeriod;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withPaymentPeriod(Float paymentPeriod) {
        this.paymentPeriod = paymentPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public String scheduleType;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withScheduleType(String scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type_full")
    public String scheduleTypeFull;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withScheduleTypeFull(String scheduleTypeFull) {
        this.scheduleTypeFull = scheduleTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public GetSchedulesScheduleDSubIdDefaultApplicationJsonResults withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}