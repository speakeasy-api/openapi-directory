package openapisdk.models.operations;



public class ReposUpdateResponse {
    public String contentType;
    public ReposUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposUpdateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.FullRepository fullRepository;
    public ReposUpdateResponse withFullRepository(openapisdk.models.shared.FullRepository fullRepository) {
        this.fullRepository = fullRepository;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposUpdateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}