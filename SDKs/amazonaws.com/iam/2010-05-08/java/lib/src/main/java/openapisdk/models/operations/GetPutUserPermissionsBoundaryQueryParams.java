package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutUserPermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutUserPermissionsBoundaryActionEnum action;
    public GetPutUserPermissionsBoundaryQueryParams withAction(GetPutUserPermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PermissionsBoundary")
    public String permissionsBoundary;
    public GetPutUserPermissionsBoundaryQueryParams withPermissionsBoundary(String permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetPutUserPermissionsBoundaryQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutUserPermissionsBoundaryVersionEnum version;
    public GetPutUserPermissionsBoundaryQueryParams withVersion(GetPutUserPermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}