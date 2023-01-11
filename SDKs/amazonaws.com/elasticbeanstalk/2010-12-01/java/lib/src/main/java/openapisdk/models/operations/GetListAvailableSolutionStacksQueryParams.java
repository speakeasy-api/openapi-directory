package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAvailableSolutionStacksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAvailableSolutionStacksActionEnum action;
    public GetListAvailableSolutionStacksQueryParams withAction(GetListAvailableSolutionStacksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAvailableSolutionStacksVersionEnum version;
    public GetListAvailableSolutionStacksQueryParams withVersion(GetListAvailableSolutionStacksVersionEnum version) {
        this.version = version;
        return this;
    }
}