package openapisdk.models.shared;


public enum ClassStateEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    ARCHIVED("archived");

    public final String value;

    private ClassStateEnum(String value) {
        this.value = value;
    }
}
