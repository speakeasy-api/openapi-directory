package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SegmentAnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public SegmentAnalyticsQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public SegmentAnalyticsQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segment_id")
    public String segmentId;
    public SegmentAnalyticsQueryParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}