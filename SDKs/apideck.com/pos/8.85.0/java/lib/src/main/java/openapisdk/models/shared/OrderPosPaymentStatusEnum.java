package openapisdk.models.shared;


public enum OrderPosPaymentStatusEnum {
    OPEN("open"),
    PAID("paid"),
    REFUNDED("refunded"),
    CREDITED("credited"),
    PARTIALLY_PAID("partially_paid"),
    PARTIALLY_REFUNDED("partially_refunded"),
    UNKNOWN("unknown");

    public final String value;

    private OrderPosPaymentStatusEnum(String value) {
        this.value = value;
    }
}
