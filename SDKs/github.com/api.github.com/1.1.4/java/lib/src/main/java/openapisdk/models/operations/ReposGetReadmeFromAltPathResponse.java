package openapisdk.models.operations;



public class ReposGetReadmeFromAltPathResponse {
    public String contentType;
    public ReposGetReadmeFromAltPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetReadmeFromAltPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetReadmeFromAltPathResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ContentFile contentFile;
    public ReposGetReadmeFromAltPathResponse withContentFile(openapisdk.models.shared.ContentFile contentFile) {
        this.contentFile = contentFile;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposGetReadmeFromAltPathResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}