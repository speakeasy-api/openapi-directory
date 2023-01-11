package openapisdk.models.operations;



public class GetPaymentInstrumentsIdTransactionRulesResponse {
    public String contentType;
    public GetPaymentInstrumentsIdTransactionRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public GetPaymentInstrumentsIdTransactionRulesResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetPaymentInstrumentsIdTransactionRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transactionRulesResponse;
    public GetPaymentInstrumentsIdTransactionRulesResponse withTransactionRulesResponse(Object transactionRulesResponse) {
        this.transactionRulesResponse = transactionRulesResponse;
        return this;
    }
}