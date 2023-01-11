package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateRoleDescriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateRoleDescriptionActionEnum action;
    public PostUpdateRoleDescriptionQueryParams withAction(PostUpdateRoleDescriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateRoleDescriptionVersionEnum version;
    public PostUpdateRoleDescriptionQueryParams withVersion(PostUpdateRoleDescriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}