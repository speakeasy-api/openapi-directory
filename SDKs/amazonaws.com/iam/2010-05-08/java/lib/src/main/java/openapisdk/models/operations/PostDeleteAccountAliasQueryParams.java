package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAccountAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAccountAliasActionEnum action;
    public PostDeleteAccountAliasQueryParams withAction(PostDeleteAccountAliasActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAccountAliasVersionEnum version;
    public PostDeleteAccountAliasQueryParams withVersion(PostDeleteAccountAliasVersionEnum version) {
        this.version = version;
        return this;
    }
}