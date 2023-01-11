package openapisdk.models.operations;



public class PostPaymentInstrumentsResponse {
    public String contentType;
    public PostPaymentInstrumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paymentInstrument;
    public PostPaymentInstrumentsResponse withPaymentInstrument(Object paymentInstrument) {
        this.paymentInstrument = paymentInstrument;
        return this;
    }
    public Object restServiceError;
    public PostPaymentInstrumentsResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PostPaymentInstrumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}