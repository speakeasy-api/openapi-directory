package openapisdk.models.operations;



public class GetTraceResponse {
    public String contentType;
    public GetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getTrace200ApplicationJSONInt32Integer;
    public GetTraceResponse withGetTrace200ApplicationJsonInt32Integer(Integer getTrace200ApplicationJSONInt32Integer) {
        this.getTrace200ApplicationJSONInt32Integer = getTrace200ApplicationJSONInt32Integer;
        return this;
    }
}