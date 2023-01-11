package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAccessKeyLastUsedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessKeyId")
    public String accessKeyId;
    public GetGetAccessKeyLastUsedQueryParams withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAccessKeyLastUsedActionEnum action;
    public GetGetAccessKeyLastUsedQueryParams withAction(GetGetAccessKeyLastUsedActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAccessKeyLastUsedVersionEnum version;
    public GetGetAccessKeyLastUsedQueryParams withVersion(GetGetAccessKeyLastUsedVersionEnum version) {
        this.version = version;
        return this;
    }
}