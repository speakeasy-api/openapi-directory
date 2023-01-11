package openapisdk.models.shared;


public enum ConnectionStatusEnum {
    PENDING("PENDING"),
    AVAILABLE("AVAILABLE"),
    ERROR("ERROR");

    public final String value;

    private ConnectionStatusEnum(String value) {
        this.value = value;
    }
}
