package openapisdk.models.operations;



public class PostConfigurationsResponse {
    public String contentType;
    public PostConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostConfigurations201ApplicationJson postConfigurations201ApplicationJSONObject;
    public PostConfigurationsResponse withPostConfigurations201ApplicationJsonObject(PostConfigurations201ApplicationJson postConfigurations201ApplicationJSONObject) {
        this.postConfigurations201ApplicationJSONObject = postConfigurations201ApplicationJSONObject;
        return this;
    }
}