package openapisdk.models.shared;


public enum LocationStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    OTHER("other");

    public final String value;

    private LocationStatusEnum(String value) {
        this.value = value;
    }
}
