package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSubnetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSubnetActionEnum action;
    public GetDeleteSubnetQueryParams withAction(GetDeleteSubnetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteSubnetQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetId")
    public String subnetId;
    public GetDeleteSubnetQueryParams withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSubnetVersionEnum version;
    public GetDeleteSubnetQueryParams withVersion(GetDeleteSubnetVersionEnum version) {
        this.version = version;
        return this;
    }
}