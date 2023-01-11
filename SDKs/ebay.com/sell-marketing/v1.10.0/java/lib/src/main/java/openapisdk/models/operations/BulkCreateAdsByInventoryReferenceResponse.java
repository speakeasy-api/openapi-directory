package openapisdk.models.operations;



public class BulkCreateAdsByInventoryReferenceResponse {
    public openapisdk.models.shared.BulkCreateAdsByInventoryReferenceResponse bulkCreateAdsByInventoryReferenceResponse;
    public BulkCreateAdsByInventoryReferenceResponse withBulkCreateAdsByInventoryReferenceResponse(openapisdk.models.shared.BulkCreateAdsByInventoryReferenceResponse bulkCreateAdsByInventoryReferenceResponse) {
        this.bulkCreateAdsByInventoryReferenceResponse = bulkCreateAdsByInventoryReferenceResponse;
        return this;
    }
    public String contentType;
    public BulkCreateAdsByInventoryReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkCreateAdsByInventoryReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}