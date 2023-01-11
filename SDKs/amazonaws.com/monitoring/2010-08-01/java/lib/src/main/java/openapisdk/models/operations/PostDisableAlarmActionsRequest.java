package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableAlarmActionsRequest {
    public PostDisableAlarmActionsQueryParams queryParams;
    public PostDisableAlarmActionsRequest withQueryParams(PostDisableAlarmActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableAlarmActionsHeaders headers;
    public PostDisableAlarmActionsRequest withHeaders(PostDisableAlarmActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableAlarmActionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}