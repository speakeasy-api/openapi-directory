package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableAlarmActionsRequest {
    public PostEnableAlarmActionsQueryParams queryParams;
    public PostEnableAlarmActionsRequest withQueryParams(PostEnableAlarmActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableAlarmActionsHeaders headers;
    public PostEnableAlarmActionsRequest withHeaders(PostEnableAlarmActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableAlarmActionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}