package openapisdk.models.operations;



public class GetStudentsForSectionResponse {
    public String contentType;
    public GetStudentsForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetStudentsForSectionResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetStudentsForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentsResponse studentsResponse;
    public GetStudentsForSectionResponse withStudentsResponse(openapisdk.models.shared.StudentsResponse studentsResponse) {
        this.studentsResponse = studentsResponse;
        return this;
    }
}