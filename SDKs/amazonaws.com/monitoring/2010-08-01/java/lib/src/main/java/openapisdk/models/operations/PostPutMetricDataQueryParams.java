package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutMetricDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutMetricDataActionEnum action;
    public PostPutMetricDataQueryParams withAction(PostPutMetricDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutMetricDataVersionEnum version;
    public PostPutMetricDataQueryParams withVersion(PostPutMetricDataVersionEnum version) {
        this.version = version;
        return this;
    }
}