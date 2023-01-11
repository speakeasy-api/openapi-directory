package openapisdk.models.operations;



public class GetSchoolForTeacherResponse {
    public String contentType;
    public GetSchoolForTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolForTeacherResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolResponse schoolResponse;
    public GetSchoolForTeacherResponse withSchoolResponse(openapisdk.models.shared.SchoolResponse schoolResponse) {
        this.schoolResponse = schoolResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolForTeacherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}