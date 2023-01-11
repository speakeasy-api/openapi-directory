package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAlarmsRequest {
    public PostDeleteAlarmsQueryParams queryParams;
    public PostDeleteAlarmsRequest withQueryParams(PostDeleteAlarmsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAlarmsHeaders headers;
    public PostDeleteAlarmsRequest withHeaders(PostDeleteAlarmsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAlarmsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}