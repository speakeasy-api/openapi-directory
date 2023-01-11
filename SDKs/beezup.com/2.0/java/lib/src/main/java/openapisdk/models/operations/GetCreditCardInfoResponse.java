package openapisdk.models.operations;



public class GetCreditCardInfoResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetCreditCardInfoResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetCreditCardInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditCardInfoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditCardInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreditCardInfoResponse creditCardInfoResponse;
    public GetCreditCardInfoResponse withCreditCardInfoResponse(openapisdk.models.shared.CreditCardInfoResponse creditCardInfoResponse) {
        this.creditCardInfoResponse = creditCardInfoResponse;
        return this;
    }
}