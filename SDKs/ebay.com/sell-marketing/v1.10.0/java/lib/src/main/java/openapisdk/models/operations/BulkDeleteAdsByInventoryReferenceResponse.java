package openapisdk.models.operations;



public class BulkDeleteAdsByInventoryReferenceResponse {
    public openapisdk.models.shared.BulkDeleteAdsByInventoryReferenceResponse bulkDeleteAdsByInventoryReferenceResponse;
    public BulkDeleteAdsByInventoryReferenceResponse withBulkDeleteAdsByInventoryReferenceResponse(openapisdk.models.shared.BulkDeleteAdsByInventoryReferenceResponse bulkDeleteAdsByInventoryReferenceResponse) {
        this.bulkDeleteAdsByInventoryReferenceResponse = bulkDeleteAdsByInventoryReferenceResponse;
        return this;
    }
    public String contentType;
    public BulkDeleteAdsByInventoryReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkDeleteAdsByInventoryReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}