package openapisdk.models.operations;



public class GetDistrictAdminsResponse {
    public String contentType;
    public GetDistrictAdminsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictAdminsResponse districtAdminsResponse;
    public GetDistrictAdminsResponse withDistrictAdminsResponse(openapisdk.models.shared.DistrictAdminsResponse districtAdminsResponse) {
        this.districtAdminsResponse = districtAdminsResponse;
        return this;
    }
    public Long statusCode;
    public GetDistrictAdminsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}