package openapisdk.models.operations;



public class ReposTransferResponse {
    public String contentType;
    public ReposTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MinimalRepository minimalRepository;
    public ReposTransferResponse withMinimalRepository(openapisdk.models.shared.MinimalRepository minimalRepository) {
        this.minimalRepository = minimalRepository;
        return this;
    }
}