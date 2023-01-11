package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metricName")
    public String metricName;
    public DeleteCustomMetricPathParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
}