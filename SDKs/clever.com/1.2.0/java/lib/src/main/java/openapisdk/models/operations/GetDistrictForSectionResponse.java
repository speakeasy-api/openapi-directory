package openapisdk.models.operations;



public class GetDistrictForSectionResponse {
    public String contentType;
    public GetDistrictForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictResponse districtResponse;
    public GetDistrictForSectionResponse withDistrictResponse(openapisdk.models.shared.DistrictResponse districtResponse) {
        this.districtResponse = districtResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictForSectionResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}