package openapisdk.models.operations;



public class InventoryCategoriesReadResponse {
    public String contentType;
    public InventoryCategoriesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryCategory inventoryCategory;
    public InventoryCategoriesReadResponse withInventoryCategory(openapisdk.models.shared.InventoryCategory inventoryCategory) {
        this.inventoryCategory = inventoryCategory;
        return this;
    }
    public Long statusCode;
    public InventoryCategoriesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}