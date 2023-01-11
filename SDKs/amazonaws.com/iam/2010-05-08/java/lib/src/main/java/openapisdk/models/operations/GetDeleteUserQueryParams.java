package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteUserActionEnum action;
    public GetDeleteUserQueryParams withAction(GetDeleteUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteUserQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteUserVersionEnum version;
    public GetDeleteUserQueryParams withVersion(GetDeleteUserVersionEnum version) {
        this.version = version;
        return this;
    }
}