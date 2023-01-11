package openapisdk.models.operations;


public enum GetPaymentDetailsPaymentRequestStatusEnum {
    AWAITING_AUTHORISATION("AWAITING_AUTHORISATION"),
    AUTHORISED("AUTHORISED"),
    AWAITING_MULTI_AUTHORISATION("AWAITING_MULTI_AUTHORISATION"),
    NOT_AUTHORISED("NOT_AUTHORISED"),
    PAID("PAID"),
    REJECTED("REJECTED"),
    ACCEPTED("ACCEPTED"),
    RECEIVED("RECEIVED");

    public final String value;

    private GetPaymentDetailsPaymentRequestStatusEnum(String value) {
        this.value = value;
    }
}
