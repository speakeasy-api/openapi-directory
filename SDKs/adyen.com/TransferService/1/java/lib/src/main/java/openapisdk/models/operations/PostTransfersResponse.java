package openapisdk.models.operations;



public class PostTransfersResponse {
    public String contentType;
    public PostTransfersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PostTransfersResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PostTransfersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferOld;
    public PostTransfersResponse withTransferOld(Object transferOld) {
        this.transferOld = transferOld;
        return this;
    }
}