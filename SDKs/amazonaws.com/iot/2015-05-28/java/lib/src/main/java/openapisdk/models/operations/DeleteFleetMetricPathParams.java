package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFleetMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metricName")
    public String metricName;
    public DeleteFleetMetricPathParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}