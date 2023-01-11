package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLoginProfileActionEnum action;
    public GetDeleteLoginProfileQueryParams withAction(GetDeleteLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteLoginProfileQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLoginProfileVersionEnum version;
    public GetDeleteLoginProfileQueryParams withVersion(GetDeleteLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}