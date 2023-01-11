package openapisdk.models.operations;



public class GetAvgSalePriceSalePriceGetResponse {
    public openapisdk.models.shared.BasicModelStatsResp basicModelStatsResp;
    public GetAvgSalePriceSalePriceGetResponse withBasicModelStatsResp(openapisdk.models.shared.BasicModelStatsResp basicModelStatsResp) {
        this.basicModelStatsResp = basicModelStatsResp;
        return this;
    }
    public String contentType;
    public GetAvgSalePriceSalePriceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetAvgSalePriceSalePriceGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetAvgSalePriceSalePriceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}