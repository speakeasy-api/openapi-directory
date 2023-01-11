package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSegmentVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetSegmentVersionsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=segment-id")
    public String segmentId;
    public GetSegmentVersionsPathParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}