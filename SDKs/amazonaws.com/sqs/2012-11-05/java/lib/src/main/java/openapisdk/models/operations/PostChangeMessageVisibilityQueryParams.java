package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangeMessageVisibilityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostChangeMessageVisibilityActionEnum action;
    public PostChangeMessageVisibilityQueryParams withAction(PostChangeMessageVisibilityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostChangeMessageVisibilityVersionEnum version;
    public PostChangeMessageVisibilityQueryParams withVersion(PostChangeMessageVisibilityVersionEnum version) {
        this.version = version;
        return this;
    }
}