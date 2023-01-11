package openapisdk.models.operations;



public class GetMarket3SimilarSalePriceGetResponse {
    public String contentType;
    public GetMarket3SimilarSalePriceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetMarket3SimilarSalePriceGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.SimilarSalePriceResp similarSalePriceResp;
    public GetMarket3SimilarSalePriceGetResponse withSimilarSalePriceResp(openapisdk.models.shared.SimilarSalePriceResp similarSalePriceResp) {
        this.similarSalePriceResp = similarSalePriceResp;
        return this;
    }
    public Long statusCode;
    public GetMarket3SimilarSalePriceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}