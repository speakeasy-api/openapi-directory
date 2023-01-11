package openapisdk.models.operations;



public class GetDelayResponse {
    public String contentType;
    public GetDelayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDelayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getDelay200ApplicationJSONInt32Integer;
    public GetDelayResponse withGetDelay200ApplicationJsonInt32Integer(Integer getDelay200ApplicationJSONInt32Integer) {
        this.getDelay200ApplicationJSONInt32Integer = getDelay200ApplicationJSONInt32Integer;
        return this;
    }
}