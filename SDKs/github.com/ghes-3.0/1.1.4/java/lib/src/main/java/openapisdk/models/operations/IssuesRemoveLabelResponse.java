package openapisdk.models.operations;



public class IssuesRemoveLabelResponse {
    public String contentType;
    public IssuesRemoveLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesRemoveLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesRemoveLabelResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Label[] labels;
    public IssuesRemoveLabelResponse withLabels(openapisdk.models.shared.Label[] labels) {
        this.labels = labels;
        return this;
    }
}