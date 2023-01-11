package openapisdk.models.operations;



public class GistsListPublicResponse {
    public String contentType;
    public GistsListPublicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListPublicResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListPublicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BaseGist[] baseGists;
    public GistsListPublicResponse withBaseGists(openapisdk.models.shared.BaseGist[] baseGists) {
        this.baseGists = baseGists;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsListPublicResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GistsListPublicResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}