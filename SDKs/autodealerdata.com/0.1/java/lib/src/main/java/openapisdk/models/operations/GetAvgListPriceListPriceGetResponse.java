package openapisdk.models.operations;



public class GetAvgListPriceListPriceGetResponse {
    public openapisdk.models.shared.BasicModelStatsResp basicModelStatsResp;
    public GetAvgListPriceListPriceGetResponse withBasicModelStatsResp(openapisdk.models.shared.BasicModelStatsResp basicModelStatsResp) {
        this.basicModelStatsResp = basicModelStatsResp;
        return this;
    }
    public String contentType;
    public GetAvgListPriceListPriceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetAvgListPriceListPriceGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetAvgListPriceListPriceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}