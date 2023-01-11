package openapisdk.models.operations;



public class GetTeacherForSectionResponse {
    public String contentType;
    public GetTeacherForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetTeacherForSectionResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetTeacherForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeacherResponse teacherResponse;
    public GetTeacherForSectionResponse withTeacherResponse(openapisdk.models.shared.TeacherResponse teacherResponse) {
        this.teacherResponse = teacherResponse;
        return this;
    }
}