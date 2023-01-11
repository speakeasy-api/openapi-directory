package openapisdk.models.operations;



public class IssuesSetLabelsResponse {
    public String contentType;
    public IssuesSetLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesSetLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesSetLabelsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Label[] labels;
    public IssuesSetLabelsResponse withLabels(openapisdk.models.shared.Label[] labels) {
        this.labels = labels;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public IssuesSetLabelsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}