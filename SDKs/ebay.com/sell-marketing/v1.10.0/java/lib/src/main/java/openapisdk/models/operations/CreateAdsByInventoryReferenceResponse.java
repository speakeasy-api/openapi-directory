package openapisdk.models.operations;



public class CreateAdsByInventoryReferenceResponse {
    public openapisdk.models.shared.AdReferences adReferences;
    public CreateAdsByInventoryReferenceResponse withAdReferences(openapisdk.models.shared.AdReferences adReferences) {
        this.adReferences = adReferences;
        return this;
    }
    public String contentType;
    public CreateAdsByInventoryReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAdsByInventoryReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}