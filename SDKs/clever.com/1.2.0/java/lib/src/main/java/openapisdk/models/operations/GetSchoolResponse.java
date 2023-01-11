package openapisdk.models.operations;



public class GetSchoolResponse {
    public String contentType;
    public GetSchoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolResponse schoolResponse;
    public GetSchoolResponse withSchoolResponse(openapisdk.models.shared.SchoolResponse schoolResponse) {
        this.schoolResponse = schoolResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}