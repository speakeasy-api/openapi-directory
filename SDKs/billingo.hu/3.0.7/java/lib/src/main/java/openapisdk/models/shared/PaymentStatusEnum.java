package openapisdk.models.shared;


public enum PaymentStatusEnum {
    EXPIRED("expired"),
    NONE("none"),
    OUTSTANDING("outstanding"),
    PAID("paid"),
    PARTIALLY_PAID("partially_paid");

    public final String value;

    private PaymentStatusEnum(String value) {
        this.value = value;
    }
}
