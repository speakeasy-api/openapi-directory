package openapisdk.models.shared;


public enum ServiceUpdateStatusEnum {
    AVAILABLE("available"),
    CANCELLED("cancelled"),
    EXPIRED("expired");

    public final String value;

    private ServiceUpdateStatusEnum(String value) {
        this.value = value;
    }
}
