package openapisdk.models.operations;



public class AllergiesListResponse {
    public String contentType;
    public AllergiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllergiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllergiesList200ApplicationJson allergiesList200ApplicationJSONObject;
    public AllergiesListResponse withAllergiesList200ApplicationJsonObject(AllergiesList200ApplicationJson allergiesList200ApplicationJSONObject) {
        this.allergiesList200ApplicationJSONObject = allergiesList200ApplicationJSONObject;
        return this;
    }
}