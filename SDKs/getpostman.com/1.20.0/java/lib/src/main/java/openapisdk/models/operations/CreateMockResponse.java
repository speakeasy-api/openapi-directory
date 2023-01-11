package openapisdk.models.operations;



public class CreateMockResponse {
    public String contentType;
    public CreateMockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateMock200ApplicationJson createMock200ApplicationJSONObject;
    public CreateMockResponse withCreateMock200ApplicationJsonObject(CreateMock200ApplicationJson createMock200ApplicationJSONObject) {
        this.createMock200ApplicationJSONObject = createMock200ApplicationJSONObject;
        return this;
    }
}