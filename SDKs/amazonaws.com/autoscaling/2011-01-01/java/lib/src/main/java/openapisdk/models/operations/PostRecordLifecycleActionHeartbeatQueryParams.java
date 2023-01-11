package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRecordLifecycleActionHeartbeatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRecordLifecycleActionHeartbeatActionEnum action;
    public PostRecordLifecycleActionHeartbeatQueryParams withAction(PostRecordLifecycleActionHeartbeatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRecordLifecycleActionHeartbeatVersionEnum version;
    public PostRecordLifecycleActionHeartbeatQueryParams withVersion(PostRecordLifecycleActionHeartbeatVersionEnum version) {
        this.version = version;
        return this;
    }
}