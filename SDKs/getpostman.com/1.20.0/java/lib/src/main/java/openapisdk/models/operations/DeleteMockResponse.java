package openapisdk.models.operations;



public class DeleteMockResponse {
    public String contentType;
    public DeleteMockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteMockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteMock200ApplicationJson deleteMock200ApplicationJSONObject;
    public DeleteMockResponse withDeleteMock200ApplicationJsonObject(DeleteMock200ApplicationJson deleteMock200ApplicationJSONObject) {
        this.deleteMock200ApplicationJSONObject = deleteMock200ApplicationJSONObject;
        return this;
    }
}