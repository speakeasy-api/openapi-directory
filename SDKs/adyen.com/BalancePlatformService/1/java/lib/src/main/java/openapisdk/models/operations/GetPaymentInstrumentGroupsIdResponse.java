package openapisdk.models.operations;



public class GetPaymentInstrumentGroupsIdResponse {
    public String contentType;
    public GetPaymentInstrumentGroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paymentInstrumentGroup;
    public GetPaymentInstrumentGroupsIdResponse withPaymentInstrumentGroup(Object paymentInstrumentGroup) {
        this.paymentInstrumentGroup = paymentInstrumentGroup;
        return this;
    }
    public Object restServiceError;
    public GetPaymentInstrumentGroupsIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetPaymentInstrumentGroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}