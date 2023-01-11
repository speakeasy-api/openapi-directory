package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateInstanceEventWindowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateInstanceEventWindowActionEnum action;
    public PostAssociateInstanceEventWindowQueryParams withAction(PostAssociateInstanceEventWindowActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateInstanceEventWindowVersionEnum version;
    public PostAssociateInstanceEventWindowQueryParams withVersion(PostAssociateInstanceEventWindowVersionEnum version) {
        this.version = version;
        return this;
    }
}