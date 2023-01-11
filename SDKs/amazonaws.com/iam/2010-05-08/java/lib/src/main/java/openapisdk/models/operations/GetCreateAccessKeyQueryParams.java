package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateAccessKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateAccessKeyActionEnum action;
    public GetCreateAccessKeyQueryParams withAction(GetCreateAccessKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetCreateAccessKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateAccessKeyVersionEnum version;
    public GetCreateAccessKeyQueryParams withVersion(GetCreateAccessKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}