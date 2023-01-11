package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartMetricStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartMetricStreamsActionEnum action;
    public PostStartMetricStreamsQueryParams withAction(PostStartMetricStreamsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartMetricStreamsVersionEnum version;
    public PostStartMetricStreamsQueryParams withVersion(PostStartMetricStreamsVersionEnum version) {
        this.version = version;
        return this;
    }
}