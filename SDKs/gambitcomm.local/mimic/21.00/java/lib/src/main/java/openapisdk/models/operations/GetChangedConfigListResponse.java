package openapisdk.models.operations;



public class GetChangedConfigListResponse {
    public String contentType;
    public GetChangedConfigListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChangedConfigListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] getChangedConfigList200ApplicationJSONInt32Integers;
    public GetChangedConfigListResponse withGetChangedConfigList200ApplicationJsonInt32Integers(Integer[] getChangedConfigList200ApplicationJSONInt32Integers) {
        this.getChangedConfigList200ApplicationJSONInt32Integers = getChangedConfigList200ApplicationJSONInt32Integers;
        return this;
    }
}