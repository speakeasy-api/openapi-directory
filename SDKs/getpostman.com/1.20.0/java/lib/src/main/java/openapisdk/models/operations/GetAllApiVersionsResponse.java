package openapisdk.models.operations;



public class GetAllApiVersionsResponse {
    public String contentType;
    public GetAllApiVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllApiVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllApiVersions200ApplicationJson getAllApiVersions200ApplicationJSONObject;
    public GetAllApiVersionsResponse withGetAllApiVersions200ApplicationJsonObject(GetAllApiVersions200ApplicationJson getAllApiVersions200ApplicationJSONObject) {
        this.getAllApiVersions200ApplicationJSONObject = getAllApiVersions200ApplicationJSONObject;
        return this;
    }
}