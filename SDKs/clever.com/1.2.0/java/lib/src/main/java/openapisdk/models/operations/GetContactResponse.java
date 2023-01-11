package openapisdk.models.operations;



public class GetContactResponse {
    public String contentType;
    public GetContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetContactResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentContactResponse studentContactResponse;
    public GetContactResponse withStudentContactResponse(openapisdk.models.shared.StudentContactResponse studentContactResponse) {
        this.studentContactResponse = studentContactResponse;
        return this;
    }
}