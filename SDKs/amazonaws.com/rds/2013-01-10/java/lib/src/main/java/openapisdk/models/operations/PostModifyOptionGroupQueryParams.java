package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyOptionGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyOptionGroupActionEnum action;
    public PostModifyOptionGroupQueryParams withAction(PostModifyOptionGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyOptionGroupVersionEnum version;
    public PostModifyOptionGroupQueryParams withVersion(PostModifyOptionGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}