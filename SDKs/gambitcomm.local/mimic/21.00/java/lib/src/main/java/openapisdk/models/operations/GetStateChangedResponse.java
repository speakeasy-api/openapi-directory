package openapisdk.models.operations;



public class GetStateChangedResponse {
    public String contentType;
    public GetStateChangedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStateChangedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getStateChanged200ApplicationJSONInt32Integer;
    public GetStateChangedResponse withGetStateChanged200ApplicationJsonInt32Integer(Integer getStateChanged200ApplicationJSONInt32Integer) {
        this.getStateChanged200ApplicationJSONInt32Integer = getStateChanged200ApplicationJSONInt32Integer;
        return this;
    }
}