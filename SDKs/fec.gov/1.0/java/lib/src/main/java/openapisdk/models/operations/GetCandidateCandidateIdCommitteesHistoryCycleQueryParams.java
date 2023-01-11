package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdCommitteesHistoryCycleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=designation")
    public GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum[] designation;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withDesignation(GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum[] designation) {
        this.designation = designation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_full")
    public Boolean electionFull;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withElectionFull(Boolean electionFull) {
        this.electionFull = electionFull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCandidateCandidateIdCommitteesHistoryCycleQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}