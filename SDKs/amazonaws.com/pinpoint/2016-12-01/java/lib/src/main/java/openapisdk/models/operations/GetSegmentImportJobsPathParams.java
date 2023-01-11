package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSegmentImportJobsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetSegmentImportJobsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=segment-id")
    public String segmentId;
    public GetSegmentImportJobsPathParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}