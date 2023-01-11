package openapisdk.models.operations;



public class GetSchoolsForDistrictResponse {
    public String contentType;
    public GetSchoolsForDistrictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolsForDistrictResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolsResponse schoolsResponse;
    public GetSchoolsForDistrictResponse withSchoolsResponse(openapisdk.models.shared.SchoolsResponse schoolsResponse) {
        this.schoolsResponse = schoolsResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolsForDistrictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}