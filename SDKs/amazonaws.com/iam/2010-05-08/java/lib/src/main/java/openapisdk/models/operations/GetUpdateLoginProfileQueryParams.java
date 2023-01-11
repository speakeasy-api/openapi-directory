package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateLoginProfileActionEnum action;
    public GetUpdateLoginProfileQueryParams withAction(GetUpdateLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Password")
    public String password;
    public GetUpdateLoginProfileQueryParams withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PasswordResetRequired")
    public Boolean passwordResetRequired;
    public GetUpdateLoginProfileQueryParams withPasswordResetRequired(Boolean passwordResetRequired) {
        this.passwordResetRequired = passwordResetRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUpdateLoginProfileQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateLoginProfileVersionEnum version;
    public GetUpdateLoginProfileQueryParams withVersion(GetUpdateLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}