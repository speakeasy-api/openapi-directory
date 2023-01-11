package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteInstanceProfileActionEnum action;
    public GetDeleteInstanceProfileQueryParams withAction(GetDeleteInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceProfileName")
    public String instanceProfileName;
    public GetDeleteInstanceProfileQueryParams withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteInstanceProfileVersionEnum version;
    public GetDeleteInstanceProfileQueryParams withVersion(GetDeleteInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}