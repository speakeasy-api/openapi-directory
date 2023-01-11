package openapisdk.models.operations;



public class GetDistrictsResponse {
    public String contentType;
    public GetDistrictsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictsResponse districtsResponse;
    public GetDistrictsResponse withDistrictsResponse(openapisdk.models.shared.DistrictsResponse districtsResponse) {
        this.districtsResponse = districtsResponse;
        return this;
    }
    public Long statusCode;
    public GetDistrictsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}