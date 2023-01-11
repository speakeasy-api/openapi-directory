package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableMetricsCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableMetricsCollectionActionEnum action;
    public GetEnableMetricsCollectionQueryParams withAction(GetEnableMetricsCollectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetEnableMetricsCollectionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Granularity")
    public String granularity;
    public GetEnableMetricsCollectionQueryParams withGranularity(String granularity) {
        this.granularity = granularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Metrics")
    public String[] metrics;
    public GetEnableMetricsCollectionQueryParams withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableMetricsCollectionVersionEnum version;
    public GetEnableMetricsCollectionQueryParams withVersion(GetEnableMetricsCollectionVersionEnum version) {
        this.version = version;
        return this;
    }
}