package openapisdk.models.operations;



public class GetTransactionsByIdResponse {
    public String contentType;
    public GetTransactionsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTransactionsByIdTransaction transaction;
    public GetTransactionsByIdResponse withTransaction(GetTransactionsByIdTransaction transaction) {
        this.transaction = transaction;
        return this;
    }
}