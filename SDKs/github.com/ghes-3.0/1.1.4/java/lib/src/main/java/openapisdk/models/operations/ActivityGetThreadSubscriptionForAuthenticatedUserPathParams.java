package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thread_id")
    public Long threadId;
    public ActivityGetThreadSubscriptionForAuthenticatedUserPathParams withThreadId(Long threadId) {
        this.threadId = threadId;
        return this;
    }
}