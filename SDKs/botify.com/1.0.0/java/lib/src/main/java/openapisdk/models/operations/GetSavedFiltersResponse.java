package openapisdk.models.operations;



public class GetSavedFiltersResponse {
    public String contentType;
    public GetSavedFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetSavedFiltersResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetSavedFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSavedFilters200ApplicationJson getSavedFilters200ApplicationJSONObject;
    public GetSavedFiltersResponse withGetSavedFilters200ApplicationJsonObject(GetSavedFilters200ApplicationJson getSavedFilters200ApplicationJSONObject) {
        this.getSavedFilters200ApplicationJSONObject = getSavedFilters200ApplicationJSONObject;
        return this;
    }
}