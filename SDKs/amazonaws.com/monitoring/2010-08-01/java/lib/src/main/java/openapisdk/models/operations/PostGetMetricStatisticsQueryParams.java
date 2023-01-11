package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetMetricStatisticsActionEnum action;
    public PostGetMetricStatisticsQueryParams withAction(PostGetMetricStatisticsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetMetricStatisticsVersionEnum version;
    public PostGetMetricStatisticsQueryParams withVersion(PostGetMetricStatisticsVersionEnum version) {
        this.version = version;
        return this;
    }
}