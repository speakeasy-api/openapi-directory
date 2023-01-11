package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagInstanceProfileActionEnum action;
    public GetUntagInstanceProfileQueryParams withAction(GetUntagInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceProfileName")
    public String instanceProfileName;
    public GetUntagInstanceProfileQueryParams withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagInstanceProfileQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagInstanceProfileVersionEnum version;
    public GetUntagInstanceProfileQueryParams withVersion(GetUntagInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}