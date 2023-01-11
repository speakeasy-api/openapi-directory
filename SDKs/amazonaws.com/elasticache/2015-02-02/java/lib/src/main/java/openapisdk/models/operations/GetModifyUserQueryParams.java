package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessString")
    public String accessString;
    public GetModifyUserQueryParams withAccessString(String accessString) {
        this.accessString = accessString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyUserActionEnum action;
    public GetModifyUserQueryParams withAction(GetModifyUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AppendAccessString")
    public String appendAccessString;
    public GetModifyUserQueryParams withAppendAccessString(String appendAccessString) {
        this.appendAccessString = appendAccessString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NoPasswordRequired")
    public Boolean noPasswordRequired;
    public GetModifyUserQueryParams withNoPasswordRequired(Boolean noPasswordRequired) {
        this.noPasswordRequired = noPasswordRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Passwords")
    public String[] passwords;
    public GetModifyUserQueryParams withPasswords(String[] passwords) {
        this.passwords = passwords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserId")
    public String userId;
    public GetModifyUserQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyUserVersionEnum version;
    public GetModifyUserQueryParams withVersion(GetModifyUserVersionEnum version) {
        this.version = version;
        return this;
    }
}