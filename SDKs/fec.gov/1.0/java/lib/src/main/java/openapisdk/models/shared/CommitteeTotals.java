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

public class CommitteeTotals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all_loans_received")
    public Double allLoansReceived;
    public CommitteeTotals withAllLoansReceived(Double allLoansReceived) {
        this.allLoansReceived = allLoansReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all_other_loans")
    public Double allOtherLoans;
    public CommitteeTotals withAllOtherLoans(Double allOtherLoans) {
        this.allOtherLoans = allOtherLoans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocated_federal_election_levin_share")
    public Double allocatedFederalElectionLevinShare;
    public CommitteeTotals withAllocatedFederalElectionLevinShare(Double allocatedFederalElectionLevinShare) {
        this.allocatedFederalElectionLevinShare = allocatedFederalElectionLevinShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_contribution")
    public Double candidateContribution;
    public CommitteeTotals withCandidateContribution(Double candidateContribution) {
        this.candidateContribution = candidateContribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash_on_hand_beginning_period")
    public Double cashOnHandBeginningPeriod;
    public CommitteeTotals withCashOnHandBeginningPeriod(Double cashOnHandBeginningPeriod) {
        this.cashOnHandBeginningPeriod = cashOnHandBeginningPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_designation")
    public String committeeDesignation;
    public CommitteeTotals withCommitteeDesignation(String committeeDesignation) {
        this.committeeDesignation = committeeDesignation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_designation_full")
    public String committeeDesignationFull;
    public CommitteeTotals withCommitteeDesignationFull(String committeeDesignationFull) {
        this.committeeDesignationFull = committeeDesignationFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public CommitteeTotals withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public CommitteeTotals withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_state")
    public String committeeState;
    public CommitteeTotals withCommitteeState(String committeeState) {
        this.committeeState = committeeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public CommitteeTotals withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type_full")
    public String committeeTypeFull;
    public CommitteeTotals withCommitteeTypeFull(String committeeTypeFull) {
        this.committeeTypeFull = committeeTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_refunds")
    public Double contributionRefunds;
    public CommitteeTotals withContributionRefunds(Double contributionRefunds) {
        this.contributionRefunds = contributionRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributions")
    public Double contributions;
    public CommitteeTotals withContributions(Double contributions) {
        this.contributions = contributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributions_ie_and_party_expenditures_made_percent")
    public Double contributionsIeAndPartyExpendituresMadePercent;
    public CommitteeTotals withContributionsIeAndPartyExpendituresMadePercent(Double contributionsIeAndPartyExpendituresMadePercent) {
        this.contributionsIeAndPartyExpendituresMadePercent = contributionsIeAndPartyExpendituresMadePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convention_exp")
    public Double conventionExp;
    public CommitteeTotals withConventionExp(Double conventionExp) {
        this.conventionExp = conventionExp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinated_expenditures_by_party_committee")
    public Double coordinatedExpendituresByPartyCommittee;
    public CommitteeTotals withCoordinatedExpendituresByPartyCommittee(Double coordinatedExpendituresByPartyCommittee) {
        this.coordinatedExpendituresByPartyCommittee = coordinatedExpendituresByPartyCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("coverage_end_date")
    public OffsetDateTime coverageEndDate;
    public CommitteeTotals withCoverageEndDate(OffsetDateTime coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("coverage_start_date")
    public OffsetDateTime coverageStartDate;
    public CommitteeTotals withCoverageStartDate(OffsetDateTime coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public CommitteeTotals withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursements")
    public Double disbursements;
    public CommitteeTotals withDisbursements(Double disbursements) {
        this.disbursements = disbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exempt_legal_accounting_disbursement")
    public Double exemptLegalAccountingDisbursement;
    public CommitteeTotals withExemptLegalAccountingDisbursement(Double exemptLegalAccountingDisbursement) {
        this.exemptLegalAccountingDisbursement = exemptLegalAccountingDisbursement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp_prior_years_subject_limits")
    public Double expPriorYearsSubjectLimits;
    public CommitteeTotals withExpPriorYearsSubjectLimits(Double expPriorYearsSubjectLimits) {
        this.expPriorYearsSubjectLimits = expPriorYearsSubjectLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp_subject_limits")
    public Double expSubjectLimits;
    public CommitteeTotals withExpSubjectLimits(Double expSubjectLimits) {
        this.expSubjectLimits = expSubjectLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fed_candidate_committee_contributions")
    public Double fedCandidateCommitteeContributions;
    public CommitteeTotals withFedCandidateCommitteeContributions(Double fedCandidateCommitteeContributions) {
        this.fedCandidateCommitteeContributions = fedCandidateCommitteeContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fed_candidate_contribution_refunds")
    public Double fedCandidateContributionRefunds;
    public CommitteeTotals withFedCandidateContributionRefunds(Double fedCandidateContributionRefunds) {
        this.fedCandidateContributionRefunds = fedCandidateContributionRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fed_disbursements")
    public Double fedDisbursements;
    public CommitteeTotals withFedDisbursements(Double fedDisbursements) {
        this.fedDisbursements = fedDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fed_election_activity")
    public Double fedElectionActivity;
    public CommitteeTotals withFedElectionActivity(Double fedElectionActivity) {
        this.fedElectionActivity = fedElectionActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fed_operating_expenditures")
    public Double fedOperatingExpenditures;
    public CommitteeTotals withFedOperatingExpenditures(Double fedOperatingExpenditures) {
        this.fedOperatingExpenditures = fedOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fed_receipts")
    public Double fedReceipts;
    public CommitteeTotals withFedReceipts(Double fedReceipts) {
        this.fedReceipts = fedReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_funds")
    public Double federalFunds;
    public CommitteeTotals withFederalFunds(Double federalFunds) {
        this.federalFunds = federalFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_frequency")
    public String filingFrequency;
    public CommitteeTotals withFilingFrequency(String filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_frequency_full")
    public String filingFrequencyFull;
    public CommitteeTotals withFilingFrequencyFull(String filingFrequencyFull) {
        this.filingFrequencyFull = filingFrequencyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_file_date")
    public LocalDate firstFileDate;
    public CommitteeTotals withFirstFileDate(LocalDate firstFileDate) {
        this.firstFileDate = firstFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundraising_disbursements")
    public Double fundraisingDisbursements;
    public CommitteeTotals withFundraisingDisbursements(Double fundraisingDisbursements) {
        this.fundraisingDisbursements = fundraisingDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independent_expenditures")
    public Double independentExpenditures;
    public CommitteeTotals withIndependentExpenditures(Double independentExpenditures) {
        this.independentExpenditures = independentExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual_contributions")
    public Double individualContributions;
    public CommitteeTotals withIndividualContributions(Double individualContributions) {
        this.individualContributions = individualContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual_contributions_percent")
    public Double individualContributionsPercent;
    public CommitteeTotals withIndividualContributionsPercent(Double individualContributionsPercent) {
        this.individualContributionsPercent = individualContributionsPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual_itemized_contributions")
    public Double individualItemizedContributions;
    public CommitteeTotals withIndividualItemizedContributions(Double individualItemizedContributions) {
        this.individualItemizedContributions = individualItemizedContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual_unitemized_contributions")
    public Double individualUnitemizedContributions;
    public CommitteeTotals withIndividualUnitemizedContributions(Double individualUnitemizedContributions) {
        this.individualUnitemizedContributions = individualUnitemizedContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemized_convention_exp")
    public Double itemizedConventionExp;
    public CommitteeTotals withItemizedConventionExp(Double itemizedConventionExp) {
        this.itemizedConventionExp = itemizedConventionExp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemized_other_disb")
    public Double itemizedOtherDisb;
    public CommitteeTotals withItemizedOtherDisb(Double itemizedOtherDisb) {
        this.itemizedOtherDisb = itemizedOtherDisb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemized_other_income")
    public Double itemizedOtherIncome;
    public CommitteeTotals withItemizedOtherIncome(Double itemizedOtherIncome) {
        this.itemizedOtherIncome = itemizedOtherIncome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemized_other_refunds")
    public Double itemizedOtherRefunds;
    public CommitteeTotals withItemizedOtherRefunds(Double itemizedOtherRefunds) {
        this.itemizedOtherRefunds = itemizedOtherRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemized_refunds_relating_convention_exp")
    public Double itemizedRefundsRelatingConventionExp;
    public CommitteeTotals withItemizedRefundsRelatingConventionExp(Double itemizedRefundsRelatingConventionExp) {
        this.itemizedRefundsRelatingConventionExp = itemizedRefundsRelatingConventionExp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_beginning_image_number")
    public String lastBeginningImageNumber;
    public CommitteeTotals withLastBeginningImageNumber(String lastBeginningImageNumber) {
        this.lastBeginningImageNumber = lastBeginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_cash_on_hand_end_period")
    public Double lastCashOnHandEndPeriod;
    public CommitteeTotals withLastCashOnHandEndPeriod(Double lastCashOnHandEndPeriod) {
        this.lastCashOnHandEndPeriod = lastCashOnHandEndPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_debts_owed_by_committee")
    public Double lastDebtsOwedByCommittee;
    public CommitteeTotals withLastDebtsOwedByCommittee(Double lastDebtsOwedByCommittee) {
        this.lastDebtsOwedByCommittee = lastDebtsOwedByCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_debts_owed_to_committee")
    public Double lastDebtsOwedToCommittee;
    public CommitteeTotals withLastDebtsOwedToCommittee(Double lastDebtsOwedToCommittee) {
        this.lastDebtsOwedToCommittee = lastDebtsOwedToCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_report_type_full")
    public String lastReportTypeFull;
    public CommitteeTotals withLastReportTypeFull(String lastReportTypeFull) {
        this.lastReportTypeFull = lastReportTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_report_year")
    public Integer lastReportYear;
    public CommitteeTotals withLastReportYear(Integer lastReportYear) {
        this.lastReportYear = lastReportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_repayments")
    public Double loanRepayments;
    public CommitteeTotals withLoanRepayments(Double loanRepayments) {
        this.loanRepayments = loanRepayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_repayments_candidate_loans")
    public Double loanRepaymentsCandidateLoans;
    public CommitteeTotals withLoanRepaymentsCandidateLoans(Double loanRepaymentsCandidateLoans) {
        this.loanRepaymentsCandidateLoans = loanRepaymentsCandidateLoans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_repayments_made")
    public Double loanRepaymentsMade;
    public CommitteeTotals withLoanRepaymentsMade(Double loanRepaymentsMade) {
        this.loanRepaymentsMade = loanRepaymentsMade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_repayments_other_loans")
    public Double loanRepaymentsOtherLoans;
    public CommitteeTotals withLoanRepaymentsOtherLoans(Double loanRepaymentsOtherLoans) {
        this.loanRepaymentsOtherLoans = loanRepaymentsOtherLoans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_repayments_received")
    public Double loanRepaymentsReceived;
    public CommitteeTotals withLoanRepaymentsReceived(Double loanRepaymentsReceived) {
        this.loanRepaymentsReceived = loanRepaymentsReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans")
    public Double loans;
    public CommitteeTotals withLoans(Double loans) {
        this.loans = loans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans_and_loan_repayments_made")
    public Double loansAndLoanRepaymentsMade;
    public CommitteeTotals withLoansAndLoanRepaymentsMade(Double loansAndLoanRepaymentsMade) {
        this.loansAndLoanRepaymentsMade = loansAndLoanRepaymentsMade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans_and_loan_repayments_received")
    public Double loansAndLoanRepaymentsReceived;
    public CommitteeTotals withLoansAndLoanRepaymentsReceived(Double loansAndLoanRepaymentsReceived) {
        this.loansAndLoanRepaymentsReceived = loansAndLoanRepaymentsReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans_made")
    public Double loansMade;
    public CommitteeTotals withLoansMade(Double loansMade) {
        this.loansMade = loansMade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans_made_by_candidate")
    public Double loansMadeByCandidate;
    public CommitteeTotals withLoansMadeByCandidate(Double loansMadeByCandidate) {
        this.loansMadeByCandidate = loansMadeByCandidate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans_received")
    public Double loansReceived;
    public CommitteeTotals withLoansReceived(Double loansReceived) {
        this.loansReceived = loansReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loans_received_from_candidate")
    public Double loansReceivedFromCandidate;
    public CommitteeTotals withLoansReceivedFromCandidate(Double loansReceivedFromCandidate) {
        this.loansReceivedFromCandidate = loansReceivedFromCandidate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_contributions")
    public Double netContributions;
    public CommitteeTotals withNetContributions(Double netContributions) {
        this.netContributions = netContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_operating_expenditures")
    public Double netOperatingExpenditures;
    public CommitteeTotals withNetOperatingExpenditures(Double netOperatingExpenditures) {
        this.netOperatingExpenditures = netOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_allocated_fed_election_activity")
    public Double nonAllocatedFedElectionActivity;
    public CommitteeTotals withNonAllocatedFedElectionActivity(Double nonAllocatedFedElectionActivity) {
        this.nonAllocatedFedElectionActivity = nonAllocatedFedElectionActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsets_to_fundraising_expenditures")
    public Double offsetsToFundraisingExpenditures;
    public CommitteeTotals withOffsetsToFundraisingExpenditures(Double offsetsToFundraisingExpenditures) {
        this.offsetsToFundraisingExpenditures = offsetsToFundraisingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsets_to_legal_accounting")
    public Double offsetsToLegalAccounting;
    public CommitteeTotals withOffsetsToLegalAccounting(Double offsetsToLegalAccounting) {
        this.offsetsToLegalAccounting = offsetsToLegalAccounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsets_to_operating_expenditures")
    public Double offsetsToOperatingExpenditures;
    public CommitteeTotals withOffsetsToOperatingExpenditures(Double offsetsToOperatingExpenditures) {
        this.offsetsToOperatingExpenditures = offsetsToOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operating_expenditures")
    public Double operatingExpenditures;
    public CommitteeTotals withOperatingExpenditures(Double operatingExpenditures) {
        this.operatingExpenditures = operatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operating_expenditures_percent")
    public Double operatingExpendituresPercent;
    public CommitteeTotals withOperatingExpendituresPercent(Double operatingExpendituresPercent) {
        this.operatingExpendituresPercent = operatingExpendituresPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type")
    public String organizationType;
    public CommitteeTotals withOrganizationType(String organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type_full")
    public String organizationTypeFull;
    public CommitteeTotals withOrganizationTypeFull(String organizationTypeFull) {
        this.organizationTypeFull = organizationTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_disbursements")
    public Double otherDisbursements;
    public CommitteeTotals withOtherDisbursements(Double otherDisbursements) {
        this.otherDisbursements = otherDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_fed_operating_expenditures")
    public Double otherFedOperatingExpenditures;
    public CommitteeTotals withOtherFedOperatingExpenditures(Double otherFedOperatingExpenditures) {
        this.otherFedOperatingExpenditures = otherFedOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_fed_receipts")
    public Double otherFedReceipts;
    public CommitteeTotals withOtherFedReceipts(Double otherFedReceipts) {
        this.otherFedReceipts = otherFedReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_loans_received")
    public Double otherLoansReceived;
    public CommitteeTotals withOtherLoansReceived(Double otherLoansReceived) {
        this.otherLoansReceived = otherLoansReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_political_committee_contributions")
    public Double otherPoliticalCommitteeContributions;
    public CommitteeTotals withOtherPoliticalCommitteeContributions(Double otherPoliticalCommitteeContributions) {
        this.otherPoliticalCommitteeContributions = otherPoliticalCommitteeContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_receipts")
    public Double otherReceipts;
    public CommitteeTotals withOtherReceipts(Double otherReceipts) {
        this.otherReceipts = otherReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_refunds")
    public Double otherRefunds;
    public CommitteeTotals withOtherRefunds(Double otherRefunds) {
        this.otherRefunds = otherRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_and_other_committee_contributions_percent")
    public Double partyAndOtherCommitteeContributionsPercent;
    public CommitteeTotals withPartyAndOtherCommitteeContributionsPercent(Double partyAndOtherCommitteeContributionsPercent) {
        this.partyAndOtherCommitteeContributionsPercent = partyAndOtherCommitteeContributionsPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public CommitteeTotals withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public CommitteeTotals withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("political_party_committee_contributions")
    public Double politicalPartyCommitteeContributions;
    public CommitteeTotals withPoliticalPartyCommitteeContributions(Double politicalPartyCommitteeContributions) {
        this.politicalPartyCommitteeContributions = politicalPartyCommitteeContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipts")
    public Double receipts;
    public CommitteeTotals withReceipts(Double receipts) {
        this.receipts = receipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded_individual_contributions")
    public Double refundedIndividualContributions;
    public CommitteeTotals withRefundedIndividualContributions(Double refundedIndividualContributions) {
        this.refundedIndividualContributions = refundedIndividualContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded_other_political_committee_contributions")
    public Double refundedOtherPoliticalCommitteeContributions;
    public CommitteeTotals withRefundedOtherPoliticalCommitteeContributions(Double refundedOtherPoliticalCommitteeContributions) {
        this.refundedOtherPoliticalCommitteeContributions = refundedOtherPoliticalCommitteeContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded_political_party_committee_contributions")
    public Double refundedPoliticalPartyCommitteeContributions;
    public CommitteeTotals withRefundedPoliticalPartyCommitteeContributions(Double refundedPoliticalPartyCommitteeContributions) {
        this.refundedPoliticalPartyCommitteeContributions = refundedPoliticalPartyCommitteeContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds_relating_convention_exp")
    public Double refundsRelatingConventionExp;
    public CommitteeTotals withRefundsRelatingConventionExp(Double refundsRelatingConventionExp) {
        this.refundsRelatingConventionExp = refundsRelatingConventionExp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repayments_loans_made_by_candidate")
    public Double repaymentsLoansMadeByCandidate;
    public CommitteeTotals withRepaymentsLoansMadeByCandidate(Double repaymentsLoansMadeByCandidate) {
        this.repaymentsLoansMadeByCandidate = repaymentsLoansMadeByCandidate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repayments_other_loans")
    public Double repaymentsOtherLoans;
    public CommitteeTotals withRepaymentsOtherLoans(Double repaymentsOtherLoans) {
        this.repaymentsOtherLoans = repaymentsOtherLoans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_form")
    public String reportForm;
    public CommitteeTotals withReportForm(String reportForm) {
        this.reportForm = reportForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_fed_activity")
    public Double sharedFedActivity;
    public CommitteeTotals withSharedFedActivity(Double sharedFedActivity) {
        this.sharedFedActivity = sharedFedActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_fed_activity_nonfed")
    public Double sharedFedActivityNonfed;
    public CommitteeTotals withSharedFedActivityNonfed(Double sharedFedActivityNonfed) {
        this.sharedFedActivityNonfed = sharedFedActivityNonfed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_fed_operating_expenditures")
    public Double sharedFedOperatingExpenditures;
    public CommitteeTotals withSharedFedOperatingExpenditures(Double sharedFedOperatingExpenditures) {
        this.sharedFedOperatingExpenditures = sharedFedOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_nonfed_operating_expenditures")
    public Double sharedNonfedOperatingExpenditures;
    public CommitteeTotals withSharedNonfedOperatingExpenditures(Double sharedNonfedOperatingExpenditures) {
        this.sharedNonfedOperatingExpenditures = sharedNonfedOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_exp_subject_limits")
    public Double totalExpSubjectLimits;
    public CommitteeTotals withTotalExpSubjectLimits(Double totalExpSubjectLimits) {
        this.totalExpSubjectLimits = totalExpSubjectLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_independent_contributions")
    public Double totalIndependentContributions;
    public CommitteeTotals withTotalIndependentContributions(Double totalIndependentContributions) {
        this.totalIndependentContributions = totalIndependentContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_independent_expenditures")
    public Double totalIndependentExpenditures;
    public CommitteeTotals withTotalIndependentExpenditures(Double totalIndependentExpenditures) {
        this.totalIndependentExpenditures = totalIndependentExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_offsets_to_operating_expenditures")
    public Double totalOffsetsToOperatingExpenditures;
    public CommitteeTotals withTotalOffsetsToOperatingExpenditures(Double totalOffsetsToOperatingExpenditures) {
        this.totalOffsetsToOperatingExpenditures = totalOffsetsToOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_transfers")
    public Double totalTransfers;
    public CommitteeTotals withTotalTransfers(Double totalTransfers) {
        this.totalTransfers = totalTransfers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_coverage_date")
    public LocalDate transactionCoverageDate;
    public CommitteeTotals withTransactionCoverageDate(LocalDate transactionCoverageDate) {
        this.transactionCoverageDate = transactionCoverageDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_from_affiliated_committee")
    public Double transfersFromAffiliatedCommittee;
    public CommitteeTotals withTransfersFromAffiliatedCommittee(Double transfersFromAffiliatedCommittee) {
        this.transfersFromAffiliatedCommittee = transfersFromAffiliatedCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_from_affiliated_party")
    public Double transfersFromAffiliatedParty;
    public CommitteeTotals withTransfersFromAffiliatedParty(Double transfersFromAffiliatedParty) {
        this.transfersFromAffiliatedParty = transfersFromAffiliatedParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_from_nonfed_account")
    public Double transfersFromNonfedAccount;
    public CommitteeTotals withTransfersFromNonfedAccount(Double transfersFromNonfedAccount) {
        this.transfersFromNonfedAccount = transfersFromNonfedAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_from_nonfed_levin")
    public Double transfersFromNonfedLevin;
    public CommitteeTotals withTransfersFromNonfedLevin(Double transfersFromNonfedLevin) {
        this.transfersFromNonfedLevin = transfersFromNonfedLevin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_from_other_authorized_committee")
    public Double transfersFromOtherAuthorizedCommittee;
    public CommitteeTotals withTransfersFromOtherAuthorizedCommittee(Double transfersFromOtherAuthorizedCommittee) {
        this.transfersFromOtherAuthorizedCommittee = transfersFromOtherAuthorizedCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_to_affiliated_committee")
    public Double transfersToAffiliatedCommittee;
    public CommitteeTotals withTransfersToAffiliatedCommittee(Double transfersToAffiliatedCommittee) {
        this.transfersToAffiliatedCommittee = transfersToAffiliatedCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_to_other_authorized_committee")
    public Double transfersToOtherAuthorizedCommittee;
    public CommitteeTotals withTransfersToOtherAuthorizedCommittee(Double transfersToOtherAuthorizedCommittee) {
        this.transfersToOtherAuthorizedCommittee = transfersToOtherAuthorizedCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name")
    public String treasurerName;
    public CommitteeTotals withTreasurerName(String treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitemized_convention_exp")
    public Double unitemizedConventionExp;
    public CommitteeTotals withUnitemizedConventionExp(Double unitemizedConventionExp) {
        this.unitemizedConventionExp = unitemizedConventionExp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitemized_other_disb")
    public Double unitemizedOtherDisb;
    public CommitteeTotals withUnitemizedOtherDisb(Double unitemizedOtherDisb) {
        this.unitemizedOtherDisb = unitemizedOtherDisb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitemized_other_income")
    public Double unitemizedOtherIncome;
    public CommitteeTotals withUnitemizedOtherIncome(Double unitemizedOtherIncome) {
        this.unitemizedOtherIncome = unitemizedOtherIncome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitemized_other_refunds")
    public Double unitemizedOtherRefunds;
    public CommitteeTotals withUnitemizedOtherRefunds(Double unitemizedOtherRefunds) {
        this.unitemizedOtherRefunds = unitemizedOtherRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitemized_refunds_relating_convention_exp")
    public Double unitemizedRefundsRelatingConventionExp;
    public CommitteeTotals withUnitemizedRefundsRelatingConventionExp(Double unitemizedRefundsRelatingConventionExp) {
        this.unitemizedRefundsRelatingConventionExp = unitemizedRefundsRelatingConventionExp;
        return this;
    }
}