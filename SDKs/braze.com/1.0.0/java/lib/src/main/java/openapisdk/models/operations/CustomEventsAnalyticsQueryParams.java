package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomEventsAnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public String appId;
    public CustomEventsAnalyticsQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public CustomEventsAnalyticsQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event")
    public String event;
    public CustomEventsAnalyticsQueryParams withEvent(String event) {
        this.event = event;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public CustomEventsAnalyticsQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segment_id")
    public String segmentId;
    public CustomEventsAnalyticsQueryParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String unit;
    public CustomEventsAnalyticsQueryParams withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}