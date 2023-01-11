package openapisdk.models.operations;



public class DeleteEnvironmentResponse {
    public String contentType;
    public DeleteEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteEnvironment200ApplicationJson deleteEnvironment200ApplicationJSONObject;
    public DeleteEnvironmentResponse withDeleteEnvironment200ApplicationJsonObject(DeleteEnvironment200ApplicationJson deleteEnvironment200ApplicationJSONObject) {
        this.deleteEnvironment200ApplicationJSONObject = deleteEnvironment200ApplicationJSONObject;
        return this;
    }
    public DeleteEnvironment404ApplicationJson deleteEnvironment404ApplicationJSONObject;
    public DeleteEnvironmentResponse withDeleteEnvironment404ApplicationJsonObject(DeleteEnvironment404ApplicationJson deleteEnvironment404ApplicationJSONObject) {
        this.deleteEnvironment404ApplicationJSONObject = deleteEnvironment404ApplicationJSONObject;
        return this;
    }
}