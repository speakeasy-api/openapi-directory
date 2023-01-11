package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopMetricStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStopMetricStreamsActionEnum action;
    public PostStopMetricStreamsQueryParams withAction(PostStopMetricStreamsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStopMetricStreamsVersionEnum version;
    public PostStopMetricStreamsQueryParams withVersion(PostStopMetricStreamsVersionEnum version) {
        this.version = version;
        return this;
    }
}