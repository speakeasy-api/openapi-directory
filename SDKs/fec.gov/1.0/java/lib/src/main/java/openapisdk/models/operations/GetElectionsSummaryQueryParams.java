package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetElectionsSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetElectionsSummaryQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer cycle;
    public GetElectionsSummaryQueryParams withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String district;
    public GetElectionsSummaryQueryParams withDistrict(String district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_full")
    public Boolean electionFull;
    public GetElectionsSummaryQueryParams withElectionFull(Boolean electionFull) {
        this.electionFull = electionFull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetElectionsSummaryOfficeEnum office;
    public GetElectionsSummaryQueryParams withOffice(GetElectionsSummaryOfficeEnum office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetElectionsSummaryQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}