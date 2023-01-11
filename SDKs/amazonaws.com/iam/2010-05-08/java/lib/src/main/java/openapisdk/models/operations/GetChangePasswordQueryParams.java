package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangePasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetChangePasswordActionEnum action;
    public GetChangePasswordQueryParams withAction(GetChangePasswordActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewPassword")
    public String newPassword;
    public GetChangePasswordQueryParams withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OldPassword")
    public String oldPassword;
    public GetChangePasswordQueryParams withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetChangePasswordVersionEnum version;
    public GetChangePasswordQueryParams withVersion(GetChangePasswordVersionEnum version) {
        this.version = version;
        return this;
    }
}