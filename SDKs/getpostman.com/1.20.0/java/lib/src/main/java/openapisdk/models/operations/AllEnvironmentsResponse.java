package openapisdk.models.operations;



public class AllEnvironmentsResponse {
    public String contentType;
    public AllEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllEnvironments200ApplicationJson allEnvironments200ApplicationJSONObject;
    public AllEnvironmentsResponse withAllEnvironments200ApplicationJsonObject(AllEnvironments200ApplicationJson allEnvironments200ApplicationJSONObject) {
        this.allEnvironments200ApplicationJSONObject = allEnvironments200ApplicationJSONObject;
        return this;
    }
}