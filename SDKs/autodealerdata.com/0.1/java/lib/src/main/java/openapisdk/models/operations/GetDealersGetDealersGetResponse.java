package openapisdk.models.operations;



public class GetDealersGetDealersGetResponse {
    public String contentType;
    public GetDealersGetDealersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealershipDataResp dealershipDataResp;
    public GetDealersGetDealersGetResponse withDealershipDataResp(openapisdk.models.shared.DealershipDataResp dealershipDataResp) {
        this.dealershipDataResp = dealershipDataResp;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetDealersGetDealersGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetDealersGetDealersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}