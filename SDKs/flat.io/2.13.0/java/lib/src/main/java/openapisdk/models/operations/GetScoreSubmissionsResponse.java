package openapisdk.models.operations;



public class GetScoreSubmissionsResponse {
    public openapisdk.models.shared.AssignmentSubmission[] assignmentSubmissions;
    public GetScoreSubmissionsResponse withAssignmentSubmissions(openapisdk.models.shared.AssignmentSubmission[] assignmentSubmissions) {
        this.assignmentSubmissions = assignmentSubmissions;
        return this;
    }
    public String contentType;
    public GetScoreSubmissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreSubmissionsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetScoreSubmissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}