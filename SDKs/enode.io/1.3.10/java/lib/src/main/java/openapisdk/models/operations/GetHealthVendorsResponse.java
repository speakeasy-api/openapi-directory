package openapisdk.models.operations;



public class GetHealthVendorsResponse {
    public String contentType;
    public GetHealthVendorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHealthVendorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetHealthVendors200ApplicationJson[] getHealthVendors200ApplicationJSONObjects;
    public GetHealthVendorsResponse withGetHealthVendors200ApplicationJsonObjects(GetHealthVendors200ApplicationJson[] getHealthVendors200ApplicationJSONObjects) {
        this.getHealthVendors200ApplicationJSONObjects = getHealthVendors200ApplicationJSONObjects;
        return this;
    }
}