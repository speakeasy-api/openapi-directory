package openapisdk.models.operations;



public class IssuesCreateLabelResponse {
    public String contentType;
    public IssuesCreateLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesCreateLabelResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesCreateLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesCreateLabelResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public IssuesCreateLabelResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesCreateLabelResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}