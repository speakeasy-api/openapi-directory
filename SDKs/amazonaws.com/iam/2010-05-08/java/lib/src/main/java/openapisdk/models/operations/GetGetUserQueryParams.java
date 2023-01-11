package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetUserActionEnum action;
    public GetGetUserQueryParams withAction(GetGetUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetGetUserQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetUserVersionEnum version;
    public GetGetUserQueryParams withVersion(GetGetUserVersionEnum version) {
        this.version = version;
        return this;
    }
}