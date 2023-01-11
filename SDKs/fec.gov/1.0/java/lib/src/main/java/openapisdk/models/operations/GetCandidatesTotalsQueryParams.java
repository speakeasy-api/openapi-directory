package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidatesTotalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCandidatesTotalsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetCandidatesTotalsQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCandidatesTotalsQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetCandidatesTotalsQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_full")
    public Boolean electionFull;
    public GetCandidatesTotalsQueryParams withElectionFull(Boolean electionFull) {
        this.electionFull = electionFull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public Integer[] electionYear;
    public GetCandidatesTotalsQueryParams withElectionYear(Integer[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=federal_funds_flag")
    public Boolean federalFundsFlag;
    public GetCandidatesTotalsQueryParams withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_raised_funds")
    public Boolean hasRaisedFunds;
    public GetCandidatesTotalsQueryParams withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_active_candidate")
    public Boolean isActiveCandidate;
    public GetCandidatesTotalsQueryParams withIsActiveCandidate(Boolean isActiveCandidate) {
        this.isActiveCandidate = isActiveCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_cash_on_hand_end_period")
    public String maxCashOnHandEndPeriod;
    public GetCandidatesTotalsQueryParams withMaxCashOnHandEndPeriod(String maxCashOnHandEndPeriod) {
        this.maxCashOnHandEndPeriod = maxCashOnHandEndPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_debts_owed_by_committee")
    public String maxDebtsOwedByCommittee;
    public GetCandidatesTotalsQueryParams withMaxDebtsOwedByCommittee(String maxDebtsOwedByCommittee) {
        this.maxDebtsOwedByCommittee = maxDebtsOwedByCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_disbursements")
    public String maxDisbursements;
    public GetCandidatesTotalsQueryParams withMaxDisbursements(String maxDisbursements) {
        this.maxDisbursements = maxDisbursements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipts")
    public String maxReceipts;
    public GetCandidatesTotalsQueryParams withMaxReceipts(String maxReceipts) {
        this.maxReceipts = maxReceipts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_cash_on_hand_end_period")
    public String minCashOnHandEndPeriod;
    public GetCandidatesTotalsQueryParams withMinCashOnHandEndPeriod(String minCashOnHandEndPeriod) {
        this.minCashOnHandEndPeriod = minCashOnHandEndPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_debts_owed_by_committee")
    public String minDebtsOwedByCommittee;
    public GetCandidatesTotalsQueryParams withMinDebtsOwedByCommittee(String minDebtsOwedByCommittee) {
        this.minDebtsOwedByCommittee = minDebtsOwedByCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_disbursements")
    public String minDisbursements;
    public GetCandidatesTotalsQueryParams withMinDisbursements(String minDisbursements) {
        this.minDisbursements = minDisbursements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipts")
    public String minReceipts;
    public GetCandidatesTotalsQueryParams withMinReceipts(String minReceipts) {
        this.minReceipts = minReceipts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCandidatesTotalsOfficeEnum[] office;
    public GetCandidatesTotalsQueryParams withOffice(GetCandidatesTotalsOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCandidatesTotalsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetCandidatesTotalsQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCandidatesTotalsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetCandidatesTotalsQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCandidatesTotalsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCandidatesTotalsQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCandidatesTotalsQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCandidatesTotalsQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetCandidatesTotalsQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
}