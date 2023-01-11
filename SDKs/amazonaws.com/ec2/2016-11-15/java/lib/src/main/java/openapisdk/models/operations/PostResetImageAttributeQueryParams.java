package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetImageAttributeActionEnum action;
    public PostResetImageAttributeQueryParams withAction(PostResetImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetImageAttributeVersionEnum version;
    public PostResetImageAttributeQueryParams withVersion(PostResetImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}