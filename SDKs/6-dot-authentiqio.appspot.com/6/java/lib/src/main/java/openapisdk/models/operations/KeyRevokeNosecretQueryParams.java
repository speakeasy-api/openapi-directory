package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyRevokeNosecretQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public KeyRevokeNosecretQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public KeyRevokeNosecretQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phone")
    public String phone;
    public KeyRevokeNosecretQueryParams withPhone(String phone) {
        this.phone = phone;
        return this;
    }
}