package openapisdk.models.operations;



public class GetTeacherResponse {
    public String contentType;
    public GetTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetTeacherResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetTeacherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeacherResponse teacherResponse;
    public GetTeacherResponse withTeacherResponse(openapisdk.models.shared.TeacherResponse teacherResponse) {
        this.teacherResponse = teacherResponse;
        return this;
    }
}