package openapisdk.models.operations;



public class GetExchangeRateResponse {
    public String contentType;
    public GetExchangeRateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetExchangeRateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetExchangeRate getExchangeRate;
    public GetExchangeRateResponse withGetExchangeRate(openapisdk.models.shared.GetExchangeRate getExchangeRate) {
        this.getExchangeRate = getExchangeRate;
        return this;
    }
}