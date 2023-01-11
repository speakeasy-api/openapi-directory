package openapisdk.models.operations;



public class GetConfiguredListResponse {
    public String contentType;
    public GetConfiguredListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfiguredListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] getConfiguredList200ApplicationJSONInt32Integers;
    public GetConfiguredListResponse withGetConfiguredList200ApplicationJsonInt32Integers(Integer[] getConfiguredList200ApplicationJSONInt32Integers) {
        this.getConfiguredList200ApplicationJSONInt32Integers = getConfiguredList200ApplicationJSONInt32Integers;
        return this;
    }
}