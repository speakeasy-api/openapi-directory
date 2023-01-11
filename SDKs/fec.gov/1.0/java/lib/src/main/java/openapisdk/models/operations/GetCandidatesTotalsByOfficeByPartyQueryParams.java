package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidatesTotalsByOfficeByPartyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public Integer[] electionYear;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withElectionYear(Integer[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_active_candidate")
    public Boolean isActiveCandidate;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withIsActiveCandidate(Boolean isActiveCandidate) {
        this.isActiveCandidate = isActiveCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCandidatesTotalsByOfficeByPartyOfficeEnum office;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withOffice(GetCandidatesTotalsByOfficeByPartyOfficeEnum office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCandidatesTotalsByOfficeByPartyQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}