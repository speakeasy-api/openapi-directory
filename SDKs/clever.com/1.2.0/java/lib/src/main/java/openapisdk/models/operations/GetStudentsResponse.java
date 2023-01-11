package openapisdk.models.operations;



public class GetStudentsResponse {
    public String contentType;
    public GetStudentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStudentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentsResponse studentsResponse;
    public GetStudentsResponse withStudentsResponse(openapisdk.models.shared.StudentsResponse studentsResponse) {
        this.studentsResponse = studentsResponse;
        return this;
    }
}