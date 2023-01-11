package openapisdk.models.operations;



public class OrgsListAppInstallationsResponse {
    public String contentType;
    public OrgsListAppInstallationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListAppInstallationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListAppInstallationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public OrgsListAppInstallations200ApplicationJson orgsListAppInstallations200ApplicationJSONObject;
    public OrgsListAppInstallationsResponse withOrgsListAppInstallations200ApplicationJsonObject(OrgsListAppInstallations200ApplicationJson orgsListAppInstallations200ApplicationJSONObject) {
        this.orgsListAppInstallations200ApplicationJSONObject = orgsListAppInstallations200ApplicationJSONObject;
        return this;
    }
}