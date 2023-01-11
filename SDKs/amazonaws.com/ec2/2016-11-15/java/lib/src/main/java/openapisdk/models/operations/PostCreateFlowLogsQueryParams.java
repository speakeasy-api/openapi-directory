package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateFlowLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateFlowLogsActionEnum action;
    public PostCreateFlowLogsQueryParams withAction(PostCreateFlowLogsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateFlowLogsVersionEnum version;
    public PostCreateFlowLogsQueryParams withVersion(PostCreateFlowLogsVersionEnum version) {
        this.version = version;
        return this;
    }
}