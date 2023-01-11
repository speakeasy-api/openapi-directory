package openapisdk.models.operations;



public class GetTransferResponse {
    public String contentType;
    public GetTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Transfer transfer;
    public GetTransferResponse withTransfer(openapisdk.models.shared.Transfer transfer) {
        this.transfer = transfer;
        return this;
    }
}