package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresidentialSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_contributions_less_repayments")
    public Double candidateContributionsLessRepayments;
    public PresidentialSummary withCandidateContributionsLessRepayments(Double candidateContributionsLessRepayments) {
        this.candidateContributionsLessRepayments = candidateContributionsLessRepayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public PresidentialSummary withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public PresidentialSummary withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public PresidentialSummary withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_party_affiliation")
    public String candidatePartyAffiliation;
    public PresidentialSummary withCandidatePartyAffiliation(String candidatePartyAffiliation) {
        this.candidatePartyAffiliation = candidatePartyAffiliation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash_on_hand_end")
    public Double cashOnHandEnd;
    public PresidentialSummary withCashOnHandEnd(Double cashOnHandEnd) {
        this.cashOnHandEnd = cashOnHandEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_designation")
    public String committeeDesignation;
    public PresidentialSummary withCommitteeDesignation(String committeeDesignation) {
        this.committeeDesignation = committeeDesignation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public PresidentialSummary withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public PresidentialSummary withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public PresidentialSummary withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debts_owed_by_committee")
    public Double debtsOwedByCommittee;
    public PresidentialSummary withDebtsOwedByCommittee(Double debtsOwedByCommittee) {
        this.debtsOwedByCommittee = debtsOwedByCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursements_less_offsets")
    public Double disbursementsLessOffsets;
    public PresidentialSummary withDisbursementsLessOffsets(Double disbursementsLessOffsets) {
        this.disbursementsLessOffsets = disbursementsLessOffsets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public PresidentialSummary withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exempt_legal_accounting_disbursement")
    public Double exemptLegalAccountingDisbursement;
    public PresidentialSummary withExemptLegalAccountingDisbursement(Double exemptLegalAccountingDisbursement) {
        this.exemptLegalAccountingDisbursement = exemptLegalAccountingDisbursement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_funds")
    public Double federalFunds;
    public PresidentialSummary withFederalFunds(Double federalFunds) {
        this.federalFunds = federalFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundraising_disbursements")
    public Double fundraisingDisbursements;
    public PresidentialSummary withFundraisingDisbursements(Double fundraisingDisbursements) {
        this.fundraisingDisbursements = fundraisingDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual_contributions_less_refunds")
    public Double individualContributionsLessRefunds;
    public PresidentialSummary withIndividualContributionsLessRefunds(Double individualContributionsLessRefunds) {
        this.individualContributionsLessRefunds = individualContributionsLessRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_receipts")
    public Double netReceipts;
    public PresidentialSummary withNetReceipts(Double netReceipts) {
        this.netReceipts = netReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsets_to_operating_expenditures")
    public Double offsetsToOperatingExpenditures;
    public PresidentialSummary withOffsetsToOperatingExpenditures(Double offsetsToOperatingExpenditures) {
        this.offsetsToOperatingExpenditures = offsetsToOperatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operating_expenditures")
    public Double operatingExpenditures;
    public PresidentialSummary withOperatingExpenditures(Double operatingExpenditures) {
        this.operatingExpenditures = operatingExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_disbursements")
    public Double otherDisbursements;
    public PresidentialSummary withOtherDisbursements(Double otherDisbursements) {
        this.otherDisbursements = otherDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pac_contributions_less_refunds")
    public Double pacContributionsLessRefunds;
    public PresidentialSummary withPacContributionsLessRefunds(Double pacContributionsLessRefunds) {
        this.pacContributionsLessRefunds = pacContributionsLessRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_contributions_less_refunds")
    public Double partyContributionsLessRefunds;
    public PresidentialSummary withPartyContributionsLessRefunds(Double partyContributionsLessRefunds) {
        this.partyContributionsLessRefunds = partyContributionsLessRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repayments_loans_made_by_candidate")
    public Double repaymentsLoansMadeByCandidate;
    public PresidentialSummary withRepaymentsLoansMadeByCandidate(Double repaymentsLoansMadeByCandidate) {
        this.repaymentsLoansMadeByCandidate = repaymentsLoansMadeByCandidate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repayments_other_loans")
    public Double repaymentsOtherLoans;
    public PresidentialSummary withRepaymentsOtherLoans(Double repaymentsOtherLoans) {
        this.repaymentsOtherLoans = repaymentsOtherLoans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rounded_net_receipts")
    public Double roundedNetReceipts;
    public PresidentialSummary withRoundedNetReceipts(Double roundedNetReceipts) {
        this.roundedNetReceipts = roundedNetReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_contribution_refunds")
    public Double totalContributionRefunds;
    public PresidentialSummary withTotalContributionRefunds(Double totalContributionRefunds) {
        this.totalContributionRefunds = totalContributionRefunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_loan_repayments_made")
    public Double totalLoanRepaymentsMade;
    public PresidentialSummary withTotalLoanRepaymentsMade(Double totalLoanRepaymentsMade) {
        this.totalLoanRepaymentsMade = totalLoanRepaymentsMade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_from_affiliated_committees")
    public Double transfersFromAffiliatedCommittees;
    public PresidentialSummary withTransfersFromAffiliatedCommittees(Double transfersFromAffiliatedCommittees) {
        this.transfersFromAffiliatedCommittees = transfersFromAffiliatedCommittees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfers_to_other_authorized_committees")
    public Double transfersToOtherAuthorizedCommittees;
    public PresidentialSummary withTransfersToOtherAuthorizedCommittees(Double transfersToOtherAuthorizedCommittees) {
        this.transfersToOtherAuthorizedCommittees = transfersToOtherAuthorizedCommittees;
        return this;
    }
}