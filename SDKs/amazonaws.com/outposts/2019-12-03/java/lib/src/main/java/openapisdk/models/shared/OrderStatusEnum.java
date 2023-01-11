package openapisdk.models.shared;


public enum OrderStatusEnum {
    RECEIVED("RECEIVED"),
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    INSTALLING("INSTALLING"),
    FULFILLED("FULFILLED"),
    CANCELLED("CANCELLED");

    public final String value;

    private OrderStatusEnum(String value) {
        this.value = value;
    }
}
