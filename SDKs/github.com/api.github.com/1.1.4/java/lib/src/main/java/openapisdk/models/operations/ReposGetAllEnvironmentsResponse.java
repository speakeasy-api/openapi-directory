package openapisdk.models.operations;



public class ReposGetAllEnvironmentsResponse {
    public String contentType;
    public ReposGetAllEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetAllEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReposGetAllEnvironments200ApplicationJson reposGetAllEnvironments200ApplicationJSONObject;
    public ReposGetAllEnvironmentsResponse withReposGetAllEnvironments200ApplicationJsonObject(ReposGetAllEnvironments200ApplicationJson reposGetAllEnvironments200ApplicationJSONObject) {
        this.reposGetAllEnvironments200ApplicationJSONObject = reposGetAllEnvironments200ApplicationJSONObject;
        return this;
    }
}