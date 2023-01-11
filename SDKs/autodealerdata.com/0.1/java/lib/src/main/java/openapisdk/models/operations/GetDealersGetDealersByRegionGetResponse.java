package openapisdk.models.operations;



public class GetDealersGetDealersByRegionGetResponse {
    public String contentType;
    public GetDealersGetDealersByRegionGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealershipDataPaginatedResp dealershipDataPaginatedResp;
    public GetDealersGetDealersByRegionGetResponse withDealershipDataPaginatedResp(openapisdk.models.shared.DealershipDataPaginatedResp dealershipDataPaginatedResp) {
        this.dealershipDataPaginatedResp = dealershipDataPaginatedResp;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetDealersGetDealersByRegionGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetDealersGetDealersByRegionGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}