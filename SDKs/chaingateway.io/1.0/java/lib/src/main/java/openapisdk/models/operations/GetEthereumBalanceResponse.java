package openapisdk.models.operations;



public class GetEthereumBalanceResponse {
    public String contentType;
    public GetEthereumBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEthereumBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetEthereumBalance getEthereumBalance;
    public GetEthereumBalanceResponse withGetEthereumBalance(openapisdk.models.shared.GetEthereumBalance getEthereumBalance) {
        this.getEthereumBalance = getEthereumBalance;
        return this;
    }
}