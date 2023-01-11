package openapisdk.models.operations;



public class ReposGetResponse {
    public String contentType;
    public ReposGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.FullRepository fullRepository;
    public ReposGetResponse withFullRepository(openapisdk.models.shared.FullRepository fullRepository) {
        this.fullRepository = fullRepository;
        return this;
    }
}