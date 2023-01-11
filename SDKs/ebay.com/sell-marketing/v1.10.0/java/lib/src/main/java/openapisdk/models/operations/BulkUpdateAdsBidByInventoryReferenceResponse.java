package openapisdk.models.operations;



public class BulkUpdateAdsBidByInventoryReferenceResponse {
    public openapisdk.models.shared.BulkCreateAdsByInventoryReferenceResponse bulkCreateAdsByInventoryReferenceResponse;
    public BulkUpdateAdsBidByInventoryReferenceResponse withBulkCreateAdsByInventoryReferenceResponse(openapisdk.models.shared.BulkCreateAdsByInventoryReferenceResponse bulkCreateAdsByInventoryReferenceResponse) {
        this.bulkCreateAdsByInventoryReferenceResponse = bulkCreateAdsByInventoryReferenceResponse;
        return this;
    }
    public String contentType;
    public BulkUpdateAdsBidByInventoryReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkUpdateAdsBidByInventoryReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}