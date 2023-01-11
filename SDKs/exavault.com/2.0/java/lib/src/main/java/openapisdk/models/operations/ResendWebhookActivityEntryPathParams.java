package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendWebhookActivityEntryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public String activityId;
    public ResendWebhookActivityEntryPathParams withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
}