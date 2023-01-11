package openapisdk.models.operations;



public class GetDistrictForStudentContactResponse {
    public String contentType;
    public GetDistrictForStudentContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictResponse districtResponse;
    public GetDistrictForStudentContactResponse withDistrictResponse(openapisdk.models.shared.DistrictResponse districtResponse) {
        this.districtResponse = districtResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictForStudentContactResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictForStudentContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}