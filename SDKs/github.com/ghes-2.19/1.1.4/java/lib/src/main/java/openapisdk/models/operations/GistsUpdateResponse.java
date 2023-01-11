package openapisdk.models.operations;



public class GistsUpdateResponse {
    public String contentType;
    public GistsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GistsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsUpdateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistSimple gistSimple;
    public GistsUpdateResponse withGistSimple(openapisdk.models.shared.GistSimple gistSimple) {
        this.gistSimple = gistSimple;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GistsUpdateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}