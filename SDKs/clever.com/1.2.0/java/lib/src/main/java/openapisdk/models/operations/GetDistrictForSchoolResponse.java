package openapisdk.models.operations;



public class GetDistrictForSchoolResponse {
    public String contentType;
    public GetDistrictForSchoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictResponse districtResponse;
    public GetDistrictForSchoolResponse withDistrictResponse(openapisdk.models.shared.DistrictResponse districtResponse) {
        this.districtResponse = districtResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictForSchoolResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictForSchoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}