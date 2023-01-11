package openapisdk.models.operations;



public class ListClassStudentSubmissionsResponse {
    public openapisdk.models.shared.AssignmentSubmission[] assignmentSubmissions;
    public ListClassStudentSubmissionsResponse withAssignmentSubmissions(openapisdk.models.shared.AssignmentSubmission[] assignmentSubmissions) {
        this.assignmentSubmissions = assignmentSubmissions;
        return this;
    }
    public String contentType;
    public ListClassStudentSubmissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListClassStudentSubmissionsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListClassStudentSubmissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}