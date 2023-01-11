package openapisdk.models.operations;



public class DeleteAdsByInventoryReferenceResponse {
    public openapisdk.models.shared.AdIds adIds;
    public DeleteAdsByInventoryReferenceResponse withAdIds(openapisdk.models.shared.AdIds adIds) {
        this.adIds = adIds;
        return this;
    }
    public String contentType;
    public DeleteAdsByInventoryReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAdsByInventoryReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}