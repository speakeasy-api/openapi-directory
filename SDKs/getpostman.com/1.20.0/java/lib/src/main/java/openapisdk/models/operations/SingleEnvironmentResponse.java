package openapisdk.models.operations;



public class SingleEnvironmentResponse {
    public String contentType;
    public SingleEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SingleEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SingleEnvironment200ApplicationJson singleEnvironment200ApplicationJSONObject;
    public SingleEnvironmentResponse withSingleEnvironment200ApplicationJsonObject(SingleEnvironment200ApplicationJson singleEnvironment200ApplicationJSONObject) {
        this.singleEnvironment200ApplicationJSONObject = singleEnvironment200ApplicationJSONObject;
        return this;
    }
}