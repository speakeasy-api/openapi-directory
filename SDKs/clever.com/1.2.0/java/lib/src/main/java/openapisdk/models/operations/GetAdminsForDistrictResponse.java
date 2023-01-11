package openapisdk.models.operations;



public class GetAdminsForDistrictResponse {
    public String contentType;
    public GetAdminsForDistrictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictAdminsResponse districtAdminsResponse;
    public GetAdminsForDistrictResponse withDistrictAdminsResponse(openapisdk.models.shared.DistrictAdminsResponse districtAdminsResponse) {
        this.districtAdminsResponse = districtAdminsResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetAdminsForDistrictResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetAdminsForDistrictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}