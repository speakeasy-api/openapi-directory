package openapisdk.models.operations;



public class GetDealersGetDealersByIdGetResponse {
    public String contentType;
    public GetDealersGetDealersByIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealershipDataResp dealershipDataResp;
    public GetDealersGetDealersByIdGetResponse withDealershipDataResp(openapisdk.models.shared.DealershipDataResp dealershipDataResp) {
        this.dealershipDataResp = dealershipDataResp;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetDealersGetDealersByIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetDealersGetDealersByIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}