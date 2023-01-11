package openapisdk.models.operations;



public class PostTransferFundsResponse {
    public String contentType;
    public PostTransferFundsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostTransferFundsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostTransferFundsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferFundsResponse;
    public PostTransferFundsResponse withTransferFundsResponse(Object transferFundsResponse) {
        this.transferFundsResponse = transferFundsResponse;
        return this;
    }
}