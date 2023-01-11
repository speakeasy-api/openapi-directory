package openapisdk.models.operations;



public class GetLastResponse {
    public String contentType;
    public GetLastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getLast200ApplicationJSONInt32Integer;
    public GetLastResponse withGetLast200ApplicationJsonInt32Integer(Integer getLast200ApplicationJSONInt32Integer) {
        this.getLast200ApplicationJSONInt32Integer = getLast200ApplicationJSONInt32Integer;
        return this;
    }
}