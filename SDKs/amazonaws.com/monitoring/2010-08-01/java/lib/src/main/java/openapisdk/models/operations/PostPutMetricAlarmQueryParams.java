package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutMetricAlarmQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutMetricAlarmActionEnum action;
    public PostPutMetricAlarmQueryParams withAction(PostPutMetricAlarmActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutMetricAlarmVersionEnum version;
    public PostPutMetricAlarmQueryParams withVersion(PostPutMetricAlarmVersionEnum version) {
        this.version = version;
        return this;
    }
}