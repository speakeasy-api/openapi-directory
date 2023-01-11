package openapisdk.models.operations;



public class GetMaxResponse {
    public String contentType;
    public GetMaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getMax200ApplicationJSONInt32Integer;
    public GetMaxResponse withGetMax200ApplicationJsonInt32Integer(Integer getMax200ApplicationJSONInt32Integer) {
        this.getMax200ApplicationJSONInt32Integer = getMax200ApplicationJSONInt32Integer;
        return this;
    }
}