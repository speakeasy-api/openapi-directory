package openapisdk.models.operations;



public class PatchPaymentInstrumentsIdResponse {
    public String contentType;
    public PatchPaymentInstrumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paymentInstrument;
    public PatchPaymentInstrumentsIdResponse withPaymentInstrument(Object paymentInstrument) {
        this.paymentInstrument = paymentInstrument;
        return this;
    }
    public Object restServiceError;
    public PatchPaymentInstrumentsIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PatchPaymentInstrumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}