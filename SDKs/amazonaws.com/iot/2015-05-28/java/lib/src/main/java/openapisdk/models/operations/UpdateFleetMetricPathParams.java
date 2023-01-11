package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metricName")
    public String metricName;
    public UpdateFleetMetricPathParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}