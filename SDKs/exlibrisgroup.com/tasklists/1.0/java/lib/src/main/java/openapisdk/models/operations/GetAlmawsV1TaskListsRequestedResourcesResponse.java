package openapisdk.models.operations;



public class GetAlmawsV1TaskListsRequestedResourcesResponse {
    public byte[] body;
    public GetAlmawsV1TaskListsRequestedResourcesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAlmawsV1TaskListsRequestedResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAlmawsV1TaskListsRequestedResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAlmawsV1TaskListsRequestedResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJson getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject;
    public GetAlmawsV1TaskListsRequestedResourcesResponse withGetAlmawsV1TaskListsRequestedResources200ApplicationJsonObject(GetAlmawsV1TaskListsRequestedResources200ApplicationJson getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject) {
        this.getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject = getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject;
        return this;
    }
}