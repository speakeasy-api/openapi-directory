package openapisdk.models.operations;



public class GistsForkResponse {
    public String contentType;
    public GistsForkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsForkResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsForkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BaseGist baseGist;
    public GistsForkResponse withBaseGist(openapisdk.models.shared.BaseGist baseGist) {
        this.baseGist = baseGist;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsForkResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GistsForkResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}