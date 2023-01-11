package openapisdk.models.operations;



public class GetInventoryTaskResponse {
    public String contentType;
    public GetInventoryTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryTask inventoryTask;
    public GetInventoryTaskResponse withInventoryTask(openapisdk.models.shared.InventoryTask inventoryTask) {
        this.inventoryTask = inventoryTask;
        return this;
    }
    public Long statusCode;
    public GetInventoryTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}