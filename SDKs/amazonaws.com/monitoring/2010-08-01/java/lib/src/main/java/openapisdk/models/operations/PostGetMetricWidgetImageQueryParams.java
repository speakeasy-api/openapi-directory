package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricWidgetImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetMetricWidgetImageActionEnum action;
    public PostGetMetricWidgetImageQueryParams withAction(PostGetMetricWidgetImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetMetricWidgetImageVersionEnum version;
    public PostGetMetricWidgetImageQueryParams withVersion(PostGetMetricWidgetImageVersionEnum version) {
        this.version = version;
        return this;
    }
}