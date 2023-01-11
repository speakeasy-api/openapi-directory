package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSegmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteSegmentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=segment-id")
    public String segmentId;
    public DeleteSegmentPathParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}