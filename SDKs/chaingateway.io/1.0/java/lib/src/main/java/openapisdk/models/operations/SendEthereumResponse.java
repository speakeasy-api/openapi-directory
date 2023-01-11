package openapisdk.models.operations;



public class SendEthereumResponse {
    public String contentType;
    public SendEthereumResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SendEthereumResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SendEthereum sendEthereum;
    public SendEthereumResponse withSendEthereum(openapisdk.models.shared.SendEthereum sendEthereum) {
        this.sendEthereum = sendEthereum;
        return this;
    }
}