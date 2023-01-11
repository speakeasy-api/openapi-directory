package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyUserActionEnum action;
    public PostModifyUserQueryParams withAction(PostModifyUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyUserVersionEnum version;
    public PostModifyUserQueryParams withVersion(PostModifyUserVersionEnum version) {
        this.version = version;
        return this;
    }
}