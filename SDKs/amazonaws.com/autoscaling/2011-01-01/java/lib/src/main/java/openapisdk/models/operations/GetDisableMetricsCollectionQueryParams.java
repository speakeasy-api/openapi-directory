package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableMetricsCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableMetricsCollectionActionEnum action;
    public GetDisableMetricsCollectionQueryParams withAction(GetDisableMetricsCollectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDisableMetricsCollectionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Metrics")
    public String[] metrics;
    public GetDisableMetricsCollectionQueryParams withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableMetricsCollectionVersionEnum version;
    public GetDisableMetricsCollectionQueryParams withVersion(GetDisableMetricsCollectionVersionEnum version) {
        this.version = version;
        return this;
    }
}