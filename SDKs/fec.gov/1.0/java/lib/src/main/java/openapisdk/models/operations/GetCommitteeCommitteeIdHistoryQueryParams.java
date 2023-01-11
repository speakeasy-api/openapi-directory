package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommitteeCommitteeIdHistoryQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=designation")
    public GetCommitteeCommitteeIdHistoryDesignationEnum[] designation;
    public GetCommitteeCommitteeIdHistoryQueryParams withDesignation(GetCommitteeCommitteeIdHistoryDesignationEnum[] designation) {
        this.designation = designation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_full")
    public Boolean electionFull;
    public GetCommitteeCommitteeIdHistoryQueryParams withElectionFull(Boolean electionFull) {
        this.electionFull = electionFull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommitteeCommitteeIdHistoryQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommitteeCommitteeIdHistoryQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCommitteeCommitteeIdHistoryQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommitteeCommitteeIdHistoryQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommitteeCommitteeIdHistoryQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommitteeCommitteeIdHistoryQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}