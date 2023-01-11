package openapisdk.models.operations;



public class InventoryCategoriesListResponse {
    public String contentType;
    public InventoryCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InventoryCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InventoryCategoriesList200ApplicationJson inventoryCategoriesList200ApplicationJSONObject;
    public InventoryCategoriesListResponse withInventoryCategoriesList200ApplicationJsonObject(InventoryCategoriesList200ApplicationJson inventoryCategoriesList200ApplicationJSONObject) {
        this.inventoryCategoriesList200ApplicationJSONObject = inventoryCategoriesList200ApplicationJSONObject;
        return this;
    }
}