package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetMetricStreamActionEnum action;
    public PostGetMetricStreamQueryParams withAction(PostGetMetricStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetMetricStreamVersionEnum version;
    public PostGetMetricStreamQueryParams withVersion(PostGetMetricStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}