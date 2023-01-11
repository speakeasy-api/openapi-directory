package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateAccountAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountAlias")
    public String accountAlias;
    public GetCreateAccountAliasQueryParams withAccountAlias(String accountAlias) {
        this.accountAlias = accountAlias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateAccountAliasActionEnum action;
    public GetCreateAccountAliasQueryParams withAction(GetCreateAccountAliasActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateAccountAliasVersionEnum version;
    public GetCreateAccountAliasQueryParams withVersion(GetCreateAccountAliasVersionEnum version) {
        this.version = version;
        return this;
    }
}