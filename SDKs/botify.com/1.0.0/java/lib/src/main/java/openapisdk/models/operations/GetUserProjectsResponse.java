package openapisdk.models.operations;



public class GetUserProjectsResponse {
    public String contentType;
    public GetUserProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUserProjectsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUserProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserProjects200ApplicationJson getUserProjects200ApplicationJSONObject;
    public GetUserProjectsResponse withGetUserProjects200ApplicationJsonObject(GetUserProjects200ApplicationJson getUserProjects200ApplicationJSONObject) {
        this.getUserProjects200ApplicationJSONObject = getUserProjects200ApplicationJSONObject;
        return this;
    }
}