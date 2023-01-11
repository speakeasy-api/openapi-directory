package openapisdk.models.operations;



public class GetTeachersForDistrictResponse {
    public String contentType;
    public GetTeachersForDistrictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetTeachersForDistrictResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetTeachersForDistrictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeachersResponse teachersResponse;
    public GetTeachersForDistrictResponse withTeachersResponse(openapisdk.models.shared.TeachersResponse teachersResponse) {
        this.teachersResponse = teachersResponse;
        return this;
    }
}