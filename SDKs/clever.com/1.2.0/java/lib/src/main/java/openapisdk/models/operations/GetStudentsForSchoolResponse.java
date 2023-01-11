package openapisdk.models.operations;



public class GetStudentsForSchoolResponse {
    public String contentType;
    public GetStudentsForSchoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetStudentsForSchoolResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetStudentsForSchoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentsResponse studentsResponse;
    public GetStudentsForSchoolResponse withStudentsResponse(openapisdk.models.shared.StudentsResponse studentsResponse) {
        this.studentsResponse = studentsResponse;
        return this;
    }
}