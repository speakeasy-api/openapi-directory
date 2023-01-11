package openapisdk.models.operations;



public class IssuesCheckUserCanBeAssignedResponse {
    public String contentType;
    public IssuesCheckUserCanBeAssignedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesCheckUserCanBeAssignedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesCheckUserCanBeAssignedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}