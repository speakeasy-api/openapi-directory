package openapisdk.models.operations;



public class GetSchoolForSectionResponse {
    public String contentType;
    public GetSchoolForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSchoolForSectionResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SchoolResponse schoolResponse;
    public GetSchoolForSectionResponse withSchoolResponse(openapisdk.models.shared.SchoolResponse schoolResponse) {
        this.schoolResponse = schoolResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}