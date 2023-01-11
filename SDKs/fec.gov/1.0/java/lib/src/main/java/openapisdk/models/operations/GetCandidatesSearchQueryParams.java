package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidatesSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCandidatesSearchQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetCandidatesSearchQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_status")
    public GetCandidatesSearchCandidateStatusEnum[] candidateStatus;
    public GetCandidatesSearchQueryParams withCandidateStatus(GetCandidatesSearchCandidateStatusEnum[] candidateStatus) {
        this.candidateStatus = candidateStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCandidatesSearchQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetCandidatesSearchQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public Integer[] electionYear;
    public GetCandidatesSearchQueryParams withElectionYear(Integer[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=federal_funds_flag")
    public Boolean federalFundsFlag;
    public GetCandidatesSearchQueryParams withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_raised_funds")
    public Boolean hasRaisedFunds;
    public GetCandidatesSearchQueryParams withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incumbent_challenge")
    public GetCandidatesSearchIncumbentChallengeEnum[] incumbentChallenge;
    public GetCandidatesSearchQueryParams withIncumbentChallenge(GetCandidatesSearchIncumbentChallengeEnum[] incumbentChallenge) {
        this.incumbentChallenge = incumbentChallenge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_active_candidate")
    public Boolean isActiveCandidate;
    public GetCandidatesSearchQueryParams withIsActiveCandidate(Boolean isActiveCandidate) {
        this.isActiveCandidate = isActiveCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_first_file_date")
    public LocalDate maxFirstFileDate;
    public GetCandidatesSearchQueryParams withMaxFirstFileDate(LocalDate maxFirstFileDate) {
        this.maxFirstFileDate = maxFirstFileDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_first_file_date")
    public LocalDate minFirstFileDate;
    public GetCandidatesSearchQueryParams withMinFirstFileDate(LocalDate minFirstFileDate) {
        this.minFirstFileDate = minFirstFileDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String[] name;
    public GetCandidatesSearchQueryParams withName(String[] name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCandidatesSearchOfficeEnum[] office;
    public GetCandidatesSearchQueryParams withOffice(GetCandidatesSearchOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCandidatesSearchQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetCandidatesSearchQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCandidatesSearchQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetCandidatesSearchQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCandidatesSearchQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCandidatesSearchQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCandidatesSearchQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCandidatesSearchQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetCandidatesSearchQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetCandidatesSearchQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}