package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchFeccandidatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchFeccandidatesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchFeccandidatesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchFeccandidatesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchFeccandidatesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchFeccandidatesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchFeccandidatesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchFeccandidatesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchFeccandidatesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchFeccandidatesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchFeccandidatesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchFeccandidatesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchFeccandidatesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchFeccandidatesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchFeccandidatesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.beginning_cash")
    public Double searchDbFeccandidatesBeginningCash;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesBeginningCash(Double searchDbFeccandidatesBeginningCash) {
        this.searchDbFeccandidatesBeginningCash = searchDbFeccandidatesBeginningCash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.candidate_loan_repayments")
    public Double searchDbFeccandidatesCandidateLoanRepayments;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesCandidateLoanRepayments(Double searchDbFeccandidatesCandidateLoanRepayments) {
        this.searchDbFeccandidatesCandidateLoanRepayments = searchDbFeccandidatesCandidateLoanRepayments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.committee_refunds")
    public Double searchDbFeccandidatesCommitteeRefunds;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesCommitteeRefunds(Double searchDbFeccandidatesCommitteeRefunds) {
        this.searchDbFeccandidatesCommitteeRefunds = searchDbFeccandidatesCommitteeRefunds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.contributions_from_candidate")
    public Double searchDbFeccandidatesContributionsFromCandidate;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesContributionsFromCandidate(Double searchDbFeccandidatesContributionsFromCandidate) {
        this.searchDbFeccandidatesContributionsFromCandidate = searchDbFeccandidatesContributionsFromCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.contributions_from_other_committees")
    public Double searchDbFeccandidatesContributionsFromOtherCommittees;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesContributionsFromOtherCommittees(Double searchDbFeccandidatesContributionsFromOtherCommittees) {
        this.searchDbFeccandidatesContributionsFromOtherCommittees = searchDbFeccandidatesContributionsFromOtherCommittees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.contributions_from_party_committees")
    public Double searchDbFeccandidatesContributionsFromPartyCommittees;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesContributionsFromPartyCommittees(Double searchDbFeccandidatesContributionsFromPartyCommittees) {
        this.searchDbFeccandidatesContributionsFromPartyCommittees = searchDbFeccandidatesContributionsFromPartyCommittees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.coverage_end_date")
    public String searchDbFeccandidatesCoverageEndDate;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesCoverageEndDate(String searchDbFeccandidatesCoverageEndDate) {
        this.searchDbFeccandidatesCoverageEndDate = searchDbFeccandidatesCoverageEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.debts_owed_by")
    public Double searchDbFeccandidatesDebtsOwedBy;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesDebtsOwedBy(Double searchDbFeccandidatesDebtsOwedBy) {
        this.searchDbFeccandidatesDebtsOwedBy = searchDbFeccandidatesDebtsOwedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.district")
    public String searchDbFeccandidatesDistrict;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesDistrict(String searchDbFeccandidatesDistrict) {
        this.searchDbFeccandidatesDistrict = searchDbFeccandidatesDistrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.ending_cash")
    public Double searchDbFeccandidatesEndingCash;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesEndingCash(Double searchDbFeccandidatesEndingCash) {
        this.searchDbFeccandidatesEndingCash = searchDbFeccandidatesEndingCash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.gender")
    public String searchDbFeccandidatesGender;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesGender(String searchDbFeccandidatesGender) {
        this.searchDbFeccandidatesGender = searchDbFeccandidatesGender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.individual_refunds")
    public Double searchDbFeccandidatesIndividualRefunds;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesIndividualRefunds(Double searchDbFeccandidatesIndividualRefunds) {
        this.searchDbFeccandidatesIndividualRefunds = searchDbFeccandidatesIndividualRefunds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.loans_from_candidates")
    public Double searchDbFeccandidatesLoansFromCandidates;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesLoansFromCandidates(Double searchDbFeccandidatesLoansFromCandidates) {
        this.searchDbFeccandidatesLoansFromCandidates = searchDbFeccandidatesLoansFromCandidates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.name")
    public String searchDbFeccandidatesName;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesName(String searchDbFeccandidatesName) {
        this.searchDbFeccandidatesName = searchDbFeccandidatesName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.other_loan_repayments")
    public Double searchDbFeccandidatesOtherLoanRepayments;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesOtherLoanRepayments(Double searchDbFeccandidatesOtherLoanRepayments) {
        this.searchDbFeccandidatesOtherLoanRepayments = searchDbFeccandidatesOtherLoanRepayments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.other_loans")
    public Double searchDbFeccandidatesOtherLoans;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesOtherLoans(Double searchDbFeccandidatesOtherLoans) {
        this.searchDbFeccandidatesOtherLoans = searchDbFeccandidatesOtherLoans;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.party")
    public String searchDbFeccandidatesParty;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesParty(String searchDbFeccandidatesParty) {
        this.searchDbFeccandidatesParty = searchDbFeccandidatesParty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.state")
    public String searchDbFeccandidatesState;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesState(String searchDbFeccandidatesState) {
        this.searchDbFeccandidatesState = searchDbFeccandidatesState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.total_disbursements")
    public Double searchDbFeccandidatesTotalDisbursements;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesTotalDisbursements(Double searchDbFeccandidatesTotalDisbursements) {
        this.searchDbFeccandidatesTotalDisbursements = searchDbFeccandidatesTotalDisbursements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.total_indivual_contributions")
    public Double searchDbFeccandidatesTotalIndivualContributions;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesTotalIndivualContributions(Double searchDbFeccandidatesTotalIndivualContributions) {
        this.searchDbFeccandidatesTotalIndivualContributions = searchDbFeccandidatesTotalIndivualContributions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.total_receipts")
    public Double searchDbFeccandidatesTotalReceipts;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesTotalReceipts(Double searchDbFeccandidatesTotalReceipts) {
        this.searchDbFeccandidatesTotalReceipts = searchDbFeccandidatesTotalReceipts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.transfers_from_committees")
    public Double searchDbFeccandidatesTransfersFromCommittees;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesTransfersFromCommittees(Double searchDbFeccandidatesTransfersFromCommittees) {
        this.searchDbFeccandidatesTransfersFromCommittees = searchDbFeccandidatesTransfersFromCommittees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_feccandidates.transfers_to_committees")
    public Double searchDbFeccandidatesTransfersToCommittees;
    public SearchFeccandidatesQueryParams withSearchDbFeccandidatesTransfersToCommittees(Double searchDbFeccandidatesTransfersToCommittees) {
        this.searchDbFeccandidatesTransfersToCommittees = searchDbFeccandidatesTransfersToCommittees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchFeccandidatesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchFeccandidatesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchFeccandidatesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}