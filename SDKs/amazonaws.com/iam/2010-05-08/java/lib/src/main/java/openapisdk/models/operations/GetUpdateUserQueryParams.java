package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateUserActionEnum action;
    public GetUpdateUserQueryParams withAction(GetUpdateUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewPath")
    public String newPath;
    public GetUpdateUserQueryParams withNewPath(String newPath) {
        this.newPath = newPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewUserName")
    public String newUserName;
    public GetUpdateUserQueryParams withNewUserName(String newUserName) {
        this.newUserName = newUserName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUpdateUserQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateUserVersionEnum version;
    public GetUpdateUserQueryParams withVersion(GetUpdateUserVersionEnum version) {
        this.version = version;
        return this;
    }
}