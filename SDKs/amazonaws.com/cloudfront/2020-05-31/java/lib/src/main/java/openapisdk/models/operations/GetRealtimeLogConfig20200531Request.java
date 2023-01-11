package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRealtimeLogConfig20200531Request {
    public GetRealtimeLogConfig20200531Headers headers;
    public GetRealtimeLogConfig20200531Request withHeaders(GetRealtimeLogConfig20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public GetRealtimeLogConfig20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}