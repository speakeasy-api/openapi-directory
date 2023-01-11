package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdCandidatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommitteeCommitteeIdCandidatesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_status")
    public GetCommitteeCommitteeIdCandidatesCandidateStatusEnum[] candidateStatus;
    public GetCommitteeCommitteeIdCandidatesQueryParams withCandidateStatus(GetCommitteeCommitteeIdCandidatesCandidateStatusEnum[] candidateStatus) {
        this.candidateStatus = candidateStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommitteeCommitteeIdCandidatesQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetCommitteeCommitteeIdCandidatesQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public Integer[] electionYear;
    public GetCommitteeCommitteeIdCandidatesQueryParams withElectionYear(Integer[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=federal_funds_flag")
    public Boolean federalFundsFlag;
    public GetCommitteeCommitteeIdCandidatesQueryParams withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_raised_funds")
    public Boolean hasRaisedFunds;
    public GetCommitteeCommitteeIdCandidatesQueryParams withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incumbent_challenge")
    public GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum[] incumbentChallenge;
    public GetCommitteeCommitteeIdCandidatesQueryParams withIncumbentChallenge(GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum[] incumbentChallenge) {
        this.incumbentChallenge = incumbentChallenge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String[] name;
    public GetCommitteeCommitteeIdCandidatesQueryParams withName(String[] name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCommitteeCommitteeIdCandidatesOfficeEnum[] office;
    public GetCommitteeCommitteeIdCandidatesQueryParams withOffice(GetCommitteeCommitteeIdCandidatesOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommitteeCommitteeIdCandidatesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetCommitteeCommitteeIdCandidatesQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommitteeCommitteeIdCandidatesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCommitteeCommitteeIdCandidatesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommitteeCommitteeIdCandidatesQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommitteeCommitteeIdCandidatesQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommitteeCommitteeIdCandidatesQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetCommitteeCommitteeIdCandidatesQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetCommitteeCommitteeIdCandidatesQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}