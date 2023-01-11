package openapisdk.models.operations;



public class GetBalanceAccountsIdPaymentInstrumentsResponse {
    public String contentType;
    public GetBalanceAccountsIdPaymentInstrumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paginatedPaymentInstrumentsResponse;
    public GetBalanceAccountsIdPaymentInstrumentsResponse withPaginatedPaymentInstrumentsResponse(Object paginatedPaymentInstrumentsResponse) {
        this.paginatedPaymentInstrumentsResponse = paginatedPaymentInstrumentsResponse;
        return this;
    }
    public Object restServiceError;
    public GetBalanceAccountsIdPaymentInstrumentsResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetBalanceAccountsIdPaymentInstrumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}