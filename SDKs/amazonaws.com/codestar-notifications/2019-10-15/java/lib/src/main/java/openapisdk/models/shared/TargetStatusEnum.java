package openapisdk.models.shared;


public enum TargetStatusEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    UNREACHABLE("UNREACHABLE"),
    INACTIVE("INACTIVE"),
    DEACTIVATED("DEACTIVATED");

    public final String value;

    private TargetStatusEnum(String value) {
        this.value = value;
    }
}
