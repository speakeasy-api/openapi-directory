package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsAppliedActivityIdContentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public String activityId;
    public GetV4LayersAsAppliedActivityIdContentsPathParams withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
}