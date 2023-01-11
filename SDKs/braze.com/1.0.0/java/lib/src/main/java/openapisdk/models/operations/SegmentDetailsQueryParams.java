package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SegmentDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segment_id")
    public String segmentId;
    public SegmentDetailsQueryParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}