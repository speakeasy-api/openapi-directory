package openapisdk.models.operations;



public class CreateEnvironmentResponse {
    public String contentType;
    public CreateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateEnvironment200ApplicationJson createEnvironment200ApplicationJSONObject;
    public CreateEnvironmentResponse withCreateEnvironment200ApplicationJsonObject(CreateEnvironment200ApplicationJson createEnvironment200ApplicationJSONObject) {
        this.createEnvironment200ApplicationJSONObject = createEnvironment200ApplicationJSONObject;
        return this;
    }
    public CreateEnvironment400ApplicationJson createEnvironment400ApplicationJSONObject;
    public CreateEnvironmentResponse withCreateEnvironment400ApplicationJsonObject(CreateEnvironment400ApplicationJson createEnvironment400ApplicationJSONObject) {
        this.createEnvironment400ApplicationJSONObject = createEnvironment400ApplicationJSONObject;
        return this;
    }
}