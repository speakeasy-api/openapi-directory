package openapisdk.models.operations;



public class GetTeachersForSchoolResponse {
    public String contentType;
    public GetTeachersForSchoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetTeachersForSchoolResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetTeachersForSchoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeachersResponse teachersResponse;
    public GetTeachersForSchoolResponse withTeachersResponse(openapisdk.models.shared.TeachersResponse teachersResponse) {
        this.teachersResponse = teachersResponse;
        return this;
    }
}