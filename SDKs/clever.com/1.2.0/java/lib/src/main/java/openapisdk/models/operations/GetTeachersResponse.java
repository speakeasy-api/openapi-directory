package openapisdk.models.operations;



public class GetTeachersResponse {
    public String contentType;
    public GetTeachersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeachersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeachersResponse teachersResponse;
    public GetTeachersResponse withTeachersResponse(openapisdk.models.shared.TeachersResponse teachersResponse) {
        this.teachersResponse = teachersResponse;
        return this;
    }
}