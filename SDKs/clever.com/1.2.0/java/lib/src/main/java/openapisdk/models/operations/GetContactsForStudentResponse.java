package openapisdk.models.operations;



public class GetContactsForStudentResponse {
    public String contentType;
    public GetContactsForStudentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetContactsForStudentResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetContactsForStudentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentContactsForStudentResponse studentContactsForStudentResponse;
    public GetContactsForStudentResponse withStudentContactsForStudentResponse(openapisdk.models.shared.StudentContactsForStudentResponse studentContactsForStudentResponse) {
        this.studentContactsForStudentResponse = studentContactsForStudentResponse;
        return this;
    }
}