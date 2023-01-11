package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceEventWindowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstanceEventWindowActionEnum action;
    public PostModifyInstanceEventWindowQueryParams withAction(PostModifyInstanceEventWindowActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstanceEventWindowVersionEnum version;
    public PostModifyInstanceEventWindowQueryParams withVersion(PostModifyInstanceEventWindowVersionEnum version) {
        this.version = version;
        return this;
    }
}