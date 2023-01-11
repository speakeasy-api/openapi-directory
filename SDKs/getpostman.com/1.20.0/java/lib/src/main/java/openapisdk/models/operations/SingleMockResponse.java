package openapisdk.models.operations;



public class SingleMockResponse {
    public String contentType;
    public SingleMockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SingleMockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SingleMock200ApplicationJson singleMock200ApplicationJSONObject;
    public SingleMockResponse withSingleMock200ApplicationJsonObject(SingleMock200ApplicationJson singleMock200ApplicationJSONObject) {
        this.singleMock200ApplicationJSONObject = singleMock200ApplicationJSONObject;
        return this;
    }
}