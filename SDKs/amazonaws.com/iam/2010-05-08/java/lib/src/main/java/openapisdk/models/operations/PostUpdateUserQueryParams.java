package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateUserActionEnum action;
    public PostUpdateUserQueryParams withAction(PostUpdateUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateUserVersionEnum version;
    public PostUpdateUserQueryParams withVersion(PostUpdateUserVersionEnum version) {
        this.version = version;
        return this;
    }
}