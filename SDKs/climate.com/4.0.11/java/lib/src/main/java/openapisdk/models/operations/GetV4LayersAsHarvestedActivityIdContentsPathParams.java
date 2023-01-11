package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsHarvestedActivityIdContentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public String activityId;
    public GetV4LayersAsHarvestedActivityIdContentsPathParams withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
}