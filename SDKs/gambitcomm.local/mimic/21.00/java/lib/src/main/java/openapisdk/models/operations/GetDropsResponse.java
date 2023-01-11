package openapisdk.models.operations;



public class GetDropsResponse {
    public String contentType;
    public GetDropsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDropsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getDrops200ApplicationJSONInt32Integer;
    public GetDropsResponse withGetDrops200ApplicationJsonInt32Integer(Integer getDrops200ApplicationJSONInt32Integer) {
        this.getDrops200ApplicationJSONInt32Integer = getDrops200ApplicationJSONInt32Integer;
        return this;
    }
}