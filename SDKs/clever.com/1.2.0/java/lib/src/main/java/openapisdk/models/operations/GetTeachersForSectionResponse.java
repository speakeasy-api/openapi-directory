package openapisdk.models.operations;



public class GetTeachersForSectionResponse {
    public String contentType;
    public GetTeachersForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetTeachersForSectionResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetTeachersForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeachersResponse teachersResponse;
    public GetTeachersForSectionResponse withTeachersResponse(openapisdk.models.shared.TeachersResponse teachersResponse) {
        this.teachersResponse = teachersResponse;
        return this;
    }
}