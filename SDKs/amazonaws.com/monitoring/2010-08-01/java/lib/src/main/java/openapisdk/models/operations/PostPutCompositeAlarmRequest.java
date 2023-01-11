package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutCompositeAlarmRequest {
    public PostPutCompositeAlarmQueryParams queryParams;
    public PostPutCompositeAlarmRequest withQueryParams(PostPutCompositeAlarmQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutCompositeAlarmHeaders headers;
    public PostPutCompositeAlarmRequest withHeaders(PostPutCompositeAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutCompositeAlarmRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}