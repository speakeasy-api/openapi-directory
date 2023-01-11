package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresidentialContributionsBySizeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetPresidentialContributionsBySizeQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetPresidentialContributionsBySizeQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public Integer[] electionYear;
    public GetPresidentialContributionsBySizeQueryParams withElectionYear(Integer[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPresidentialContributionsBySizeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetPresidentialContributionsBySizeQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Integer[] size;
    public GetPresidentialContributionsBySizeQueryParams withSize(Integer[] size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPresidentialContributionsBySizeQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetPresidentialContributionsBySizeQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetPresidentialContributionsBySizeQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetPresidentialContributionsBySizeQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}