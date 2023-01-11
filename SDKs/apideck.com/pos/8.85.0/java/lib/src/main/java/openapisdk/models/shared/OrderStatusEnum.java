package openapisdk.models.shared;


public enum OrderStatusEnum {
    OPEN("open"),
    DRAFT("draft"),
    DELIVERED("delivered"),
    DELAYED("delayed"),
    VOIDED("voided"),
    COMPLETED("completed"),
    HIDDEN("hidden");

    public final String value;

    private OrderStatusEnum(String value) {
        this.value = value;
    }
}
