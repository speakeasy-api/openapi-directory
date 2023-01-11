package openapisdk.models.operations;



public class GetContactsResponse {
    public String contentType;
    public GetContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentContactsResponse studentContactsResponse;
    public GetContactsResponse withStudentContactsResponse(openapisdk.models.shared.StudentContactsResponse studentContactsResponse) {
        this.studentContactsResponse = studentContactsResponse;
        return this;
    }
}