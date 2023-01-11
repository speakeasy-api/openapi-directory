package openapisdk.models.operations;



public class GetActiveListResponse {
    public String contentType;
    public GetActiveListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetActiveListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] getActiveList200ApplicationJSONInt32Integers;
    public GetActiveListResponse withGetActiveList200ApplicationJsonInt32Integers(Integer[] getActiveList200ApplicationJSONInt32Integers) {
        this.getActiveList200ApplicationJSONInt32Integers = getActiveList200ApplicationJSONInt32Integers;
        return this;
    }
}