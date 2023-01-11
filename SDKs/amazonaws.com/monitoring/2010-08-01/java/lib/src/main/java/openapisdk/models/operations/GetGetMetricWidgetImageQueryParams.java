package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetMetricWidgetImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetMetricWidgetImageActionEnum action;
    public GetGetMetricWidgetImageQueryParams withAction(GetGetMetricWidgetImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MetricWidget")
    public String metricWidget;
    public GetGetMetricWidgetImageQueryParams withMetricWidget(String metricWidget) {
        this.metricWidget = metricWidget;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OutputFormat")
    public String outputFormat;
    public GetGetMetricWidgetImageQueryParams withOutputFormat(String outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetMetricWidgetImageVersionEnum version;
    public GetGetMetricWidgetImageQueryParams withVersion(GetGetMetricWidgetImageVersionEnum version) {
        this.version = version;
        return this;
    }
}