package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAccountAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateAccountAliasActionEnum action;
    public PostCreateAccountAliasQueryParams withAction(PostCreateAccountAliasActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateAccountAliasVersionEnum version;
    public PostCreateAccountAliasQueryParams withVersion(PostCreateAccountAliasVersionEnum version) {
        this.version = version;
        return this;
    }
}