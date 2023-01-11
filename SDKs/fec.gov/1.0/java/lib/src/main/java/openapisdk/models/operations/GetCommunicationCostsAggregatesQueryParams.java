package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommunicationCostsAggregatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommunicationCostsAggregatesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetCommunicationCostsAggregatesQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetCommunicationCostsAggregatesQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommunicationCostsAggregatesQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommunicationCostsAggregatesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommunicationCostsAggregatesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCommunicationCostsAggregatesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommunicationCostsAggregatesQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommunicationCostsAggregatesQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommunicationCostsAggregatesQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=support_oppose_indicator")
    public GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum supportOpposeIndicator;
    public GetCommunicationCostsAggregatesQueryParams withSupportOpposeIndicator(GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum supportOpposeIndicator) {
        this.supportOpposeIndicator = supportOpposeIndicator;
        return this;
    }
}