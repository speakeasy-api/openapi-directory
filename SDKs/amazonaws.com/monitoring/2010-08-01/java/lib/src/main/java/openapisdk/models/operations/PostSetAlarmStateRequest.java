package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetAlarmStateRequest {
    public PostSetAlarmStateQueryParams queryParams;
    public PostSetAlarmStateRequest withQueryParams(PostSetAlarmStateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetAlarmStateHeaders headers;
    public PostSetAlarmStateRequest withHeaders(PostSetAlarmStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetAlarmStateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}