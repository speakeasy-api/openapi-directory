package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommunicationCostsByCandidateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommunicationCostsByCandidateQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetCommunicationCostsByCandidateQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommunicationCostsByCandidateQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String district;
    public GetCommunicationCostsByCandidateQueryParams withDistrict(String district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_full")
    public Boolean electionFull;
    public GetCommunicationCostsByCandidateQueryParams withElectionFull(Boolean electionFull) {
        this.electionFull = electionFull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCommunicationCostsByCandidateOfficeEnum office;
    public GetCommunicationCostsByCandidateQueryParams withOffice(GetCommunicationCostsByCandidateOfficeEnum office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommunicationCostsByCandidateQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommunicationCostsByCandidateQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCommunicationCostsByCandidateQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommunicationCostsByCandidateQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommunicationCostsByCandidateQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommunicationCostsByCandidateQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetCommunicationCostsByCandidateQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=support_oppose")
    public GetCommunicationCostsByCandidateSupportOpposeEnum supportOppose;
    public GetCommunicationCostsByCandidateQueryParams withSupportOppose(GetCommunicationCostsByCandidateSupportOpposeEnum supportOppose) {
        this.supportOppose = supportOppose;
        return this;
    }
}