package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateLoginProfileActionEnum action;
    public GetCreateLoginProfileQueryParams withAction(GetCreateLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Password")
    public String password;
    public GetCreateLoginProfileQueryParams withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PasswordResetRequired")
    public Boolean passwordResetRequired;
    public GetCreateLoginProfileQueryParams withPasswordResetRequired(Boolean passwordResetRequired) {
        this.passwordResetRequired = passwordResetRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetCreateLoginProfileQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateLoginProfileVersionEnum version;
    public GetCreateLoginProfileQueryParams withVersion(GetCreateLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}