package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metricName")
    public String metricName;
    public DescribeCustomMetricPathParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}