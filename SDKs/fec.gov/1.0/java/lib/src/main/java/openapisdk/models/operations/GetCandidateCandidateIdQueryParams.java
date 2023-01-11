package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCandidateCandidateIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_status")
    public GetCandidateCandidateIdCandidateStatusEnum[] candidateStatus;
    public GetCandidateCandidateIdQueryParams withCandidateStatus(GetCandidateCandidateIdCandidateStatusEnum[] candidateStatus) {
        this.candidateStatus = candidateStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCandidateCandidateIdQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetCandidateCandidateIdQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public Integer[] electionYear;
    public GetCandidateCandidateIdQueryParams withElectionYear(Integer[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=federal_funds_flag")
    public Boolean federalFundsFlag;
    public GetCandidateCandidateIdQueryParams withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_raised_funds")
    public Boolean hasRaisedFunds;
    public GetCandidateCandidateIdQueryParams withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incumbent_challenge")
    public GetCandidateCandidateIdIncumbentChallengeEnum[] incumbentChallenge;
    public GetCandidateCandidateIdQueryParams withIncumbentChallenge(GetCandidateCandidateIdIncumbentChallengeEnum[] incumbentChallenge) {
        this.incumbentChallenge = incumbentChallenge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String[] name;
    public GetCandidateCandidateIdQueryParams withName(String[] name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCandidateCandidateIdOfficeEnum[] office;
    public GetCandidateCandidateIdQueryParams withOffice(GetCandidateCandidateIdOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCandidateCandidateIdQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetCandidateCandidateIdQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCandidateCandidateIdQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCandidateCandidateIdQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCandidateCandidateIdQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCandidateCandidateIdQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCandidateCandidateIdQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetCandidateCandidateIdQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetCandidateCandidateIdQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}