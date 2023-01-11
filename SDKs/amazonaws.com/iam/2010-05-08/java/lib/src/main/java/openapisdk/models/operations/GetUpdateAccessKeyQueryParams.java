package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateAccessKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessKeyId")
    public String accessKeyId;
    public GetUpdateAccessKeyQueryParams withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateAccessKeyActionEnum action;
    public GetUpdateAccessKeyQueryParams withAction(GetUpdateAccessKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetUpdateAccessKeyStatusEnum status;
    public GetUpdateAccessKeyQueryParams withStatus(GetUpdateAccessKeyStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUpdateAccessKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateAccessKeyVersionEnum version;
    public GetUpdateAccessKeyQueryParams withVersion(GetUpdateAccessKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}