package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitySetThreadSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thread_id")
    public Long threadId;
    public ActivitySetThreadSubscriptionPathParams withThreadId(Long threadId) {
        this.threadId = threadId;
        return this;
    }
}