package openapisdk.models.operations;



public class GetInventoryTasksResponse {
    public String contentType;
    public GetInventoryTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryTaskCollection inventoryTaskCollection;
    public GetInventoryTasksResponse withInventoryTaskCollection(openapisdk.models.shared.InventoryTaskCollection inventoryTaskCollection) {
        this.inventoryTaskCollection = inventoryTaskCollection;
        return this;
    }
    public Long statusCode;
    public GetInventoryTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}