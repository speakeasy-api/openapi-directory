package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAccessKeyInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessKeyId")
    public String accessKeyId;
    public GetGetAccessKeyInfoQueryParams withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAccessKeyInfoActionEnum action;
    public GetGetAccessKeyInfoQueryParams withAction(GetGetAccessKeyInfoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAccessKeyInfoVersionEnum version;
    public GetGetAccessKeyInfoQueryParams withVersion(GetGetAccessKeyInfoVersionEnum version) {
        this.version = version;
        return this;
    }
}