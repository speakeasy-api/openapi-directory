package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutMetricStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutMetricStreamActionEnum action;
    public PostPutMetricStreamQueryParams withAction(PostPutMetricStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutMetricStreamVersionEnum version;
    public PostPutMetricStreamQueryParams withVersion(PostPutMetricStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}