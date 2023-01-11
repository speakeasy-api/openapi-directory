package openapisdk.models.operations;



public class SingleWorkspaceResponse {
    public String contentType;
    public SingleWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SingleWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SingleWorkspace200ApplicationJson singleWorkspace200ApplicationJSONObject;
    public SingleWorkspaceResponse withSingleWorkspace200ApplicationJsonObject(SingleWorkspace200ApplicationJson singleWorkspace200ApplicationJSONObject) {
        this.singleWorkspace200ApplicationJSONObject = singleWorkspace200ApplicationJSONObject;
        return this;
    }
    public SingleWorkspace404ApplicationJson singleWorkspace404ApplicationJSONObject;
    public SingleWorkspaceResponse withSingleWorkspace404ApplicationJsonObject(SingleWorkspace404ApplicationJson singleWorkspace404ApplicationJSONObject) {
        this.singleWorkspace404ApplicationJSONObject = singleWorkspace404ApplicationJSONObject;
        return this;
    }
}