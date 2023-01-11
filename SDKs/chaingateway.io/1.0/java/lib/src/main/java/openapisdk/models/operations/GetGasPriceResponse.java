package openapisdk.models.operations;



public class GetGasPriceResponse {
    public String contentType;
    public GetGasPriceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGasPriceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetGasPrice getGasPrice;
    public GetGasPriceResponse withGetGasPrice(openapisdk.models.shared.GetGasPrice getGasPrice) {
        this.getGasPrice = getGasPrice;
        return this;
    }
}