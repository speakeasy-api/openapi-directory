package openapisdk.models.operations;



public class ReposGetReadmeResponse {
    public String contentType;
    public ReposGetReadmeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetReadmeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetReadmeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ContentFile contentFile;
    public ReposGetReadmeResponse withContentFile(openapisdk.models.shared.ContentFile contentFile) {
        this.contentFile = contentFile;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposGetReadmeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}