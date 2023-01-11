package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateOAuth2SessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=failure")
    public String failure;
    public AccountCreateOAuth2SessionQueryParams withFailure(String failure) {
        this.failure = failure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scopes")
    public String[] scopes;
    public AccountCreateOAuth2SessionQueryParams withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=success")
    public String success;
    public AccountCreateOAuth2SessionQueryParams withSuccess(String success) {
        this.success = success;
        return this;
    }
}