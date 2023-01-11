package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteFlowLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteFlowLogsActionEnum action;
    public PostDeleteFlowLogsQueryParams withAction(PostDeleteFlowLogsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteFlowLogsVersionEnum version;
    public PostDeleteFlowLogsQueryParams withVersion(PostDeleteFlowLogsVersionEnum version) {
        this.version = version;
        return this;
    }
}