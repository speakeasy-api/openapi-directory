package openapisdk.models.operations;



public class UpdateEnvironmentResponse {
    public String contentType;
    public UpdateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateEnvironment200ApplicationJson updateEnvironment200ApplicationJSONObject;
    public UpdateEnvironmentResponse withUpdateEnvironment200ApplicationJsonObject(UpdateEnvironment200ApplicationJson updateEnvironment200ApplicationJSONObject) {
        this.updateEnvironment200ApplicationJSONObject = updateEnvironment200ApplicationJSONObject;
        return this;
    }
    public UpdateEnvironment400ApplicationJson updateEnvironment400ApplicationJSONObject;
    public UpdateEnvironmentResponse withUpdateEnvironment400ApplicationJsonObject(UpdateEnvironment400ApplicationJson updateEnvironment400ApplicationJSONObject) {
        this.updateEnvironment400ApplicationJSONObject = updateEnvironment400ApplicationJSONObject;
        return this;
    }
}