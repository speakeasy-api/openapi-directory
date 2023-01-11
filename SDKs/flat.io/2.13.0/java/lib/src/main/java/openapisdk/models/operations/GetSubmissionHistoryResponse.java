package openapisdk.models.operations;



public class GetSubmissionHistoryResponse {
    public openapisdk.models.shared.AssignmentSubmissionHistory[] assignmentSubmissionHistories;
    public GetSubmissionHistoryResponse withAssignmentSubmissionHistories(openapisdk.models.shared.AssignmentSubmissionHistory[] assignmentSubmissionHistories) {
        this.assignmentSubmissionHistories = assignmentSubmissionHistories;
        return this;
    }
    public String contentType;
    public GetSubmissionHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetSubmissionHistoryResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetSubmissionHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}