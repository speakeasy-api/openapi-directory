package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceEventStartTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstanceEventStartTimeActionEnum action;
    public PostModifyInstanceEventStartTimeQueryParams withAction(PostModifyInstanceEventStartTimeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstanceEventStartTimeVersionEnum version;
    public PostModifyInstanceEventStartTimeQueryParams withVersion(PostModifyInstanceEventStartTimeVersionEnum version) {
        this.version = version;
        return this;
    }
}