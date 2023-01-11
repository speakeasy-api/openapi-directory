package openapisdk.models.operations;



public class GetSchoolAdminsResponse {
    public String contentType;
    public GetSchoolAdminsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SchoolAdminsResponse schoolAdminsResponse;
    public GetSchoolAdminsResponse withSchoolAdminsResponse(openapisdk.models.shared.SchoolAdminsResponse schoolAdminsResponse) {
        this.schoolAdminsResponse = schoolAdminsResponse;
        return this;
    }
    public Long statusCode;
    public GetSchoolAdminsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}