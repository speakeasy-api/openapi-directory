package openapisdk.models.operations;



public class IssuesAddLabelsResponse {
    public String contentType;
    public IssuesAddLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesAddLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesAddLabelsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Label[] labels;
    public IssuesAddLabelsResponse withLabels(openapisdk.models.shared.Label[] labels) {
        this.labels = labels;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesAddLabelsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}