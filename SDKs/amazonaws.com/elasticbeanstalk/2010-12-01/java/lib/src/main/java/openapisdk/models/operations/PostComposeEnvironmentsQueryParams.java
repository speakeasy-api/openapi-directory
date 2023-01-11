package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostComposeEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostComposeEnvironmentsActionEnum action;
    public PostComposeEnvironmentsQueryParams withAction(PostComposeEnvironmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostComposeEnvironmentsVersionEnum version;
    public PostComposeEnvironmentsQueryParams withVersion(PostComposeEnvironmentsVersionEnum version) {
        this.version = version;
        return this;
    }
}