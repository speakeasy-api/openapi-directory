package openapisdk.models.operations;



public class UpdateMockResponse {
    public String contentType;
    public UpdateMockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateMock200ApplicationJson updateMock200ApplicationJSONObject;
    public UpdateMockResponse withUpdateMock200ApplicationJsonObject(UpdateMock200ApplicationJson updateMock200ApplicationJSONObject) {
        this.updateMock200ApplicationJSONObject = updateMock200ApplicationJSONObject;
        return this;
    }
}