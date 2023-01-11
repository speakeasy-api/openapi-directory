package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetInstanceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetInstanceAttributeActionEnum action;
    public PostResetInstanceAttributeQueryParams withAction(PostResetInstanceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetInstanceAttributeVersionEnum version;
    public PostResetInstanceAttributeQueryParams withVersion(PostResetInstanceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}