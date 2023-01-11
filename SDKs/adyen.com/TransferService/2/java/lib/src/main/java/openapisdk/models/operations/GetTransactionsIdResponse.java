package openapisdk.models.operations;



public class GetTransactionsIdResponse {
    public String contentType;
    public GetTransactionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public GetTransactionsIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetTransactionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transaction;
    public GetTransactionsIdResponse withTransaction(Object transaction) {
        this.transaction = transaction;
        return this;
    }
}