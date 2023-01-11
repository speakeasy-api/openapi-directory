package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRealtimeLogConfig20200531Request {
    public UpdateRealtimeLogConfig20200531Headers headers;
    public UpdateRealtimeLogConfig20200531Request withHeaders(UpdateRealtimeLogConfig20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateRealtimeLogConfig20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}