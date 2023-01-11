package openapisdk.models.operations;



public class GetContainersMessagesResponse {
    public String contentType;
    public GetContainersMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetContainersMessages200ApplicationJson getContainersMessages200ApplicationJSONObject;
    public GetContainersMessagesResponse withGetContainersMessages200ApplicationJsonObject(GetContainersMessages200ApplicationJson getContainersMessages200ApplicationJSONObject) {
        this.getContainersMessages200ApplicationJSONObject = getContainersMessages200ApplicationJSONObject;
        return this;
    }
}