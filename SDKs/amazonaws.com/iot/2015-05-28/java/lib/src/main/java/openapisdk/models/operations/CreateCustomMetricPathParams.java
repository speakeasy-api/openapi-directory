package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metricName")
    public String metricName;
    public CreateCustomMetricPathParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}