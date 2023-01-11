package openapisdk.models.operations;



public class GetStudentsForTeacherResponse {
    public String contentType;
    public GetStudentsForTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetStudentsForTeacherResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetStudentsForTeacherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentsResponse studentsResponse;
    public GetStudentsForTeacherResponse withStudentsResponse(openapisdk.models.shared.StudentsResponse studentsResponse) {
        this.studentsResponse = studentsResponse;
        return this;
    }
}