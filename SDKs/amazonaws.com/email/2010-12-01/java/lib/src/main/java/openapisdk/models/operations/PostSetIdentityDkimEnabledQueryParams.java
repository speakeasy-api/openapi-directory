package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityDkimEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetIdentityDkimEnabledActionEnum action;
    public PostSetIdentityDkimEnabledQueryParams withAction(PostSetIdentityDkimEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetIdentityDkimEnabledVersionEnum version;
    public PostSetIdentityDkimEnabledQueryParams withVersion(PostSetIdentityDkimEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}