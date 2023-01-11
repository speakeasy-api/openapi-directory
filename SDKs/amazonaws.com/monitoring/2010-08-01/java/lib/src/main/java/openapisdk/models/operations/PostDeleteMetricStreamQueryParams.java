package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteMetricStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteMetricStreamActionEnum action;
    public PostDeleteMetricStreamQueryParams withAction(PostDeleteMetricStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteMetricStreamVersionEnum version;
    public PostDeleteMetricStreamQueryParams withVersion(PostDeleteMetricStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}