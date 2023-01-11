package openapisdk.models.operations;



public class GetChangedResponse {
    public String contentType;
    public GetChangedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChangedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getChanged200ApplicationJSONInt32Integer;
    public GetChangedResponse withGetChanged200ApplicationJsonInt32Integer(Integer getChanged200ApplicationJSONInt32Integer) {
        this.getChanged200ApplicationJSONInt32Integer = getChanged200ApplicationJSONInt32Integer;
        return this;
    }
}