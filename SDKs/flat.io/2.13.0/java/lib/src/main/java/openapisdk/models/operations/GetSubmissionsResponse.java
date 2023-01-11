package openapisdk.models.operations;



public class GetSubmissionsResponse {
    public openapisdk.models.shared.AssignmentSubmission[] assignmentSubmissions;
    public GetSubmissionsResponse withAssignmentSubmissions(openapisdk.models.shared.AssignmentSubmission[] assignmentSubmissions) {
        this.assignmentSubmissions = assignmentSubmissions;
        return this;
    }
    public String contentType;
    public GetSubmissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetSubmissionsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetSubmissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}