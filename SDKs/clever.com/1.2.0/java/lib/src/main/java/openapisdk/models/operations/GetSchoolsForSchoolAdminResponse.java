package openapisdk.models.operations;



public class GetSchoolsForSchoolAdminResponse {
    public String contentType;
    public GetSchoolsForSchoolAdminResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolsForSchoolAdminResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolsResponse schoolsResponse;
    public GetSchoolsForSchoolAdminResponse withSchoolsResponse(openapisdk.models.shared.SchoolsResponse schoolsResponse) {
        this.schoolsResponse = schoolsResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolsForSchoolAdminResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}