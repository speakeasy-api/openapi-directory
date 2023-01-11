package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metricName")
    public String metricName;
    public DescribeFleetMetricPathParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}