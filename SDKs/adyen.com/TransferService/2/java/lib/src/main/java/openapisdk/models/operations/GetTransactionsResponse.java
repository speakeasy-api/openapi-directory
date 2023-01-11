package openapisdk.models.operations;



public class GetTransactionsResponse {
    public String contentType;
    public GetTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public GetTransactionsResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transactionSearchResponse;
    public GetTransactionsResponse withTransactionSearchResponse(Object transactionSearchResponse) {
        this.transactionSearchResponse = transactionSearchResponse;
        return this;
    }
}