package openapisdk.models.operations;



public class GetStudentsForDistrictResponse {
    public String contentType;
    public GetStudentsForDistrictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetStudentsForDistrictResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetStudentsForDistrictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentsResponse studentsResponse;
    public GetStudentsForDistrictResponse withStudentsResponse(openapisdk.models.shared.StudentsResponse studentsResponse) {
        this.studentsResponse = studentsResponse;
        return this;
    }
}