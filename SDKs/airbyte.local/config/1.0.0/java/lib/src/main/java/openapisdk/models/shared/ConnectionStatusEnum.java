package openapisdk.models.shared;


public enum ConnectionStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    DEPRECATED("deprecated");

    public final String value;

    private ConnectionStatusEnum(String value) {
        this.value = value;
    }
}
