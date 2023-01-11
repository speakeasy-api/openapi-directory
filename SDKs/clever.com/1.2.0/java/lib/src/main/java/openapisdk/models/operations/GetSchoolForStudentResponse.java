package openapisdk.models.operations;



public class GetSchoolForStudentResponse {
    public String contentType;
    public GetSchoolForStudentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolForStudentResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolResponse schoolResponse;
    public GetSchoolForStudentResponse withSchoolResponse(openapisdk.models.shared.SchoolResponse schoolResponse) {
        this.schoolResponse = schoolResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolForStudentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}