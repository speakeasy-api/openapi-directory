package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateInstanceEventWindowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateInstanceEventWindowActionEnum action;
    public PostDisassociateInstanceEventWindowQueryParams withAction(PostDisassociateInstanceEventWindowActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateInstanceEventWindowVersionEnum version;
    public PostDisassociateInstanceEventWindowQueryParams withVersion(PostDisassociateInstanceEventWindowVersionEnum version) {
        this.version = version;
        return this;
    }
}