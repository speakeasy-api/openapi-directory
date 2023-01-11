package openapisdk.models.operations;



public class UnpublishMockResponse {
    public String contentType;
    public UnpublishMockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnpublishMockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UnpublishMock200ApplicationJson unpublishMock200ApplicationJSONObject;
    public UnpublishMockResponse withUnpublishMock200ApplicationJsonObject(UnpublishMock200ApplicationJson unpublishMock200ApplicationJSONObject) {
        this.unpublishMock200ApplicationJSONObject = unpublishMock200ApplicationJSONObject;
        return this;
    }
}