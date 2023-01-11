package openapisdk.models.operations;



public class IssuesRemoveAssigneesResponse {
    public String contentType;
    public IssuesRemoveAssigneesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesRemoveAssigneesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IssueSimple issueSimple;
    public IssuesRemoveAssigneesResponse withIssueSimple(openapisdk.models.shared.IssueSimple issueSimple) {
        this.issueSimple = issueSimple;
        return this;
    }
}