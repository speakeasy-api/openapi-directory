package openapisdk.models.operations;



public class GetSchoolsResponse {
    public String contentType;
    public GetSchoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SchoolsResponse schoolsResponse;
    public GetSchoolsResponse withSchoolsResponse(openapisdk.models.shared.SchoolsResponse schoolsResponse) {
        this.schoolsResponse = schoolsResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}