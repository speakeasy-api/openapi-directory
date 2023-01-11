package openapisdk.models.operations;



public class GetDistrictAdminResponse {
    public String contentType;
    public GetDistrictAdminResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictAdminResponse districtAdminResponse;
    public GetDistrictAdminResponse withDistrictAdminResponse(openapisdk.models.shared.DistrictAdminResponse districtAdminResponse) {
        this.districtAdminResponse = districtAdminResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictAdminResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictAdminResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}