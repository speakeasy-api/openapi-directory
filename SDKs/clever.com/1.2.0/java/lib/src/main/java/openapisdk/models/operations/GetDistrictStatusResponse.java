package openapisdk.models.operations;



public class GetDistrictStatusResponse {
    public String contentType;
    public GetDistrictStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictStatusResponses districtStatusResponses;
    public GetDistrictStatusResponse withDistrictStatusResponses(openapisdk.models.shared.DistrictStatusResponses districtStatusResponses) {
        this.districtStatusResponses = districtStatusResponses;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictStatusResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}