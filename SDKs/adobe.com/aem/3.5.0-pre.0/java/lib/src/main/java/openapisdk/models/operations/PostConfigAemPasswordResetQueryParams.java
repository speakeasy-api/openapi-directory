package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigAemPasswordResetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwdreset.authorizables")
    public String[] pwdresetAuthorizables;
    public PostConfigAemPasswordResetQueryParams withPwdresetAuthorizables(String[] pwdresetAuthorizables) {
        this.pwdresetAuthorizables = pwdresetAuthorizables;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwdreset.authorizables@TypeHint")
    public String pwdresetAuthorizablesAtTypeHint;
    public PostConfigAemPasswordResetQueryParams withPwdresetAuthorizablesAtTypeHint(String pwdresetAuthorizablesAtTypeHint) {
        this.pwdresetAuthorizablesAtTypeHint = pwdresetAuthorizablesAtTypeHint;
        return this;
    }
}