package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRecordLifecycleActionHeartbeatRequest {
    public PostRecordLifecycleActionHeartbeatQueryParams queryParams;
    public PostRecordLifecycleActionHeartbeatRequest withQueryParams(PostRecordLifecycleActionHeartbeatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRecordLifecycleActionHeartbeatHeaders headers;
    public PostRecordLifecycleActionHeartbeatRequest withHeaders(PostRecordLifecycleActionHeartbeatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRecordLifecycleActionHeartbeatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}