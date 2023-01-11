package openapisdk.models.operations;



public class GetTeachersForStudentResponse {
    public String contentType;
    public GetTeachersForStudentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetTeachersForStudentResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetTeachersForStudentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeachersResponse teachersResponse;
    public GetTeachersForStudentResponse withTeachersResponse(openapisdk.models.shared.TeachersResponse teachersResponse) {
        this.teachersResponse = teachersResponse;
        return this;
    }
}