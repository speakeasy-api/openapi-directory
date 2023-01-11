package openapisdk.models.operations;



public class GetStudentResponse {
    public String contentType;
    public GetStudentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetStudentResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetStudentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentResponse studentResponse;
    public GetStudentResponse withStudentResponse(openapisdk.models.shared.StudentResponse studentResponse) {
        this.studentResponse = studentResponse;
        return this;
    }
}