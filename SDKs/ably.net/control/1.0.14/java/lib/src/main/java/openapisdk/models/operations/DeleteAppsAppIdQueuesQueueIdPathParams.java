package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppsAppIdQueuesQueueIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public DeleteAppsAppIdQueuesQueueIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queue_id")
    public String queueId;
    public DeleteAppsAppIdQueuesQueueIdPathParams withQueueId(String queueId) {
        this.queueId = queueId;
        return this;
    }
}