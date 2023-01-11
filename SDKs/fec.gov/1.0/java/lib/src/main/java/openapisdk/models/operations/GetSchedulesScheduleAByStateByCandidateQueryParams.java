package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleAByStateByCandidateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_full")
    public Boolean electionFull;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withElectionFull(Boolean electionFull) {
        this.electionFull = electionFull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetSchedulesScheduleAByStateByCandidateQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}