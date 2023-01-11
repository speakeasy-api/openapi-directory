package openapisdk.models.operations;



public class GetDistrictResponse {
    public String contentType;
    public GetDistrictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictResponse districtResponse;
    public GetDistrictResponse withDistrictResponse(openapisdk.models.shared.DistrictResponse districtResponse) {
        this.districtResponse = districtResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}