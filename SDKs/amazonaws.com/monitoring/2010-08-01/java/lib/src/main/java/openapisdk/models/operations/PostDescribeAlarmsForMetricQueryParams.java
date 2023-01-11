package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAlarmsForMetricQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAlarmsForMetricActionEnum action;
    public PostDescribeAlarmsForMetricQueryParams withAction(PostDescribeAlarmsForMetricActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAlarmsForMetricVersionEnum version;
    public PostDescribeAlarmsForMetricQueryParams withVersion(PostDescribeAlarmsForMetricVersionEnum version) {
        this.version = version;
        return this;
    }
}