package openapisdk.models.operations;



public class GetPaymentInstrumentsIdResponse {
    public String contentType;
    public GetPaymentInstrumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paymentInstrument;
    public GetPaymentInstrumentsIdResponse withPaymentInstrument(Object paymentInstrument) {
        this.paymentInstrument = paymentInstrument;
        return this;
    }
    public Object restServiceError;
    public GetPaymentInstrumentsIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetPaymentInstrumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}