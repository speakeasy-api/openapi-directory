package openapisdk.models.operations;



public class GetCommitteesResponse {
    public openapisdk.models.shared.CommitteePage committeePage;
    public GetCommitteesResponse withCommitteePage(openapisdk.models.shared.CommitteePage committeePage) {
        this.committeePage = committeePage;
        return this;
    }
    public String contentType;
    public GetCommitteesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommitteesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}