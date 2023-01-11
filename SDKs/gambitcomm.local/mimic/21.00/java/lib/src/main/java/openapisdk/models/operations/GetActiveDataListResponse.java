package openapisdk.models.operations;



public class GetActiveDataListResponse {
    public String contentType;
    public GetActiveDataListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetActiveDataListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] getActiveDataList200ApplicationJSONInt32Integers;
    public GetActiveDataListResponse withGetActiveDataList200ApplicationJsonInt32Integers(Integer[] getActiveDataList200ApplicationJSONInt32Integers) {
        this.getActiveDataList200ApplicationJSONInt32Integers = getActiveDataList200ApplicationJSONInt32Integers;
        return this;
    }
}