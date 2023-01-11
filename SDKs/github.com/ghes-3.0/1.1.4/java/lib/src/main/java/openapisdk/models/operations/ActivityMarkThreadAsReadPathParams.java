package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityMarkThreadAsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thread_id")
    public Long threadId;
    public ActivityMarkThreadAsReadPathParams withThreadId(Long threadId) {
        this.threadId = threadId;
        return this;
    }
}