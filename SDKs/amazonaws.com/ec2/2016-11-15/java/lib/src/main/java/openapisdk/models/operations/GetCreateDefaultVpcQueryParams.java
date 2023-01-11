package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateDefaultVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateDefaultVpcActionEnum action;
    public GetCreateDefaultVpcQueryParams withAction(GetCreateDefaultVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateDefaultVpcQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateDefaultVpcVersionEnum version;
    public GetCreateDefaultVpcQueryParams withVersion(GetCreateDefaultVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}