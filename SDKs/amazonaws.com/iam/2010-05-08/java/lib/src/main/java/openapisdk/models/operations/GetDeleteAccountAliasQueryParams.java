package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAccountAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountAlias")
    public String accountAlias;
    public GetDeleteAccountAliasQueryParams withAccountAlias(String accountAlias) {
        this.accountAlias = accountAlias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAccountAliasActionEnum action;
    public GetDeleteAccountAliasQueryParams withAction(GetDeleteAccountAliasActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAccountAliasVersionEnum version;
    public GetDeleteAccountAliasQueryParams withVersion(GetDeleteAccountAliasVersionEnum version) {
        this.version = version;
        return this;
    }
}