package openapisdk.models.operations;



public class PostPaymentInstrumentGroupsResponse {
    public String contentType;
    public PostPaymentInstrumentGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paymentInstrumentGroup;
    public PostPaymentInstrumentGroupsResponse withPaymentInstrumentGroup(Object paymentInstrumentGroup) {
        this.paymentInstrumentGroup = paymentInstrumentGroup;
        return this;
    }
    public Object restServiceError;
    public PostPaymentInstrumentGroupsResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PostPaymentInstrumentGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}