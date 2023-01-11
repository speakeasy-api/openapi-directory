package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAccessKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessKeyId")
    public String accessKeyId;
    public GetDeleteAccessKeyQueryParams withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAccessKeyActionEnum action;
    public GetDeleteAccessKeyQueryParams withAction(GetDeleteAccessKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteAccessKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAccessKeyVersionEnum version;
    public GetDeleteAccessKeyQueryParams withVersion(GetDeleteAccessKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}