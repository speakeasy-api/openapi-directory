package openapisdk.models.operations;



public class IssuesAddAssigneesResponse {
    public String contentType;
    public IssuesAddAssigneesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesAddAssigneesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IssueSimple issueSimple;
    public IssuesAddAssigneesResponse withIssueSimple(openapisdk.models.shared.IssueSimple issueSimple) {
        this.issueSimple = issueSimple;
        return this;
    }
}