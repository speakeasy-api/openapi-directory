package openapisdk.models.operations;



public class GetStudentForContactResponse {
    public String contentType;
    public GetStudentForContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetStudentForContactResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetStudentForContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentResponse studentResponse;
    public GetStudentForContactResponse withStudentResponse(openapisdk.models.shared.StudentResponse studentResponse) {
        this.studentResponse = studentResponse;
        return this;
    }
}