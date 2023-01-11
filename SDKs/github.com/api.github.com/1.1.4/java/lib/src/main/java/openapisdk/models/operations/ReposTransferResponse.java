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
    public openapisdk.models.shared.Repository repository;
    public ReposTransferResponse withRepository(openapisdk.models.shared.Repository repository) {
        this.repository = repository;
        return this;
    }
}