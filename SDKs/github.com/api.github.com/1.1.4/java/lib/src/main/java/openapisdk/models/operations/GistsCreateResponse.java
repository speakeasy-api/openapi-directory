package openapisdk.models.operations;



public class GistsCreateResponse {
    public String contentType;
    public GistsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsCreateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistSimple gistSimple;
    public GistsCreateResponse withGistSimple(openapisdk.models.shared.GistSimple gistSimple) {
        this.gistSimple = gistSimple;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GistsCreateResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}