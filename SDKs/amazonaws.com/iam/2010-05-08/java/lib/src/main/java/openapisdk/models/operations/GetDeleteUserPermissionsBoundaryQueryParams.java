package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteUserPermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteUserPermissionsBoundaryActionEnum action;
    public GetDeleteUserPermissionsBoundaryQueryParams withAction(GetDeleteUserPermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteUserPermissionsBoundaryQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteUserPermissionsBoundaryVersionEnum version;
    public GetDeleteUserPermissionsBoundaryQueryParams withVersion(GetDeleteUserPermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}