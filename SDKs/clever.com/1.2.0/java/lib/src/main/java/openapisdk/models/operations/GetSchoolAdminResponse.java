package openapisdk.models.operations;



public class GetSchoolAdminResponse {
    public String contentType;
    public GetSchoolAdminResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolAdminResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolAdminResponse schoolAdminResponse;
    public GetSchoolAdminResponse withSchoolAdminResponse(openapisdk.models.shared.SchoolAdminResponse schoolAdminResponse) {
        this.schoolAdminResponse = schoolAdminResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolAdminResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}