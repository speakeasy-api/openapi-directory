package openapisdk.models.operations;



public class PublishMockResponse {
    public String contentType;
    public PublishMockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishMockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PublishMock200ApplicationJson publishMock200ApplicationJSONObject;
    public PublishMockResponse withPublishMock200ApplicationJsonObject(PublishMock200ApplicationJson publishMock200ApplicationJSONObject) {
        this.publishMock200ApplicationJSONObject = publishMock200ApplicationJSONObject;
        return this;
    }
}