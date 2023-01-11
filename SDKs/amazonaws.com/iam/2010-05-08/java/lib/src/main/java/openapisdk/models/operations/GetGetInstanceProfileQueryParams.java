package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetInstanceProfileActionEnum action;
    public GetGetInstanceProfileQueryParams withAction(GetGetInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceProfileName")
    public String instanceProfileName;
    public GetGetInstanceProfileQueryParams withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetInstanceProfileVersionEnum version;
    public GetGetInstanceProfileQueryParams withVersion(GetGetInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}