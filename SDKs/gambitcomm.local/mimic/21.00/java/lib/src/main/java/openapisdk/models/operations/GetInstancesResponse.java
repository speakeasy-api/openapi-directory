package openapisdk.models.operations;



public class GetInstancesResponse {
    public String contentType;
    public GetInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getInstances200ApplicationJSONStrings;
    public GetInstancesResponse withGetInstances200ApplicationJsonStrings(String[] getInstances200ApplicationJSONStrings) {
        this.getInstances200ApplicationJSONStrings = getInstances200ApplicationJSONStrings;
        return this;
    }
}