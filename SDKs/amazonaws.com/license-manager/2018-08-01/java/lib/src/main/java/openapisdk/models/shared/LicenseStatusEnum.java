package openapisdk.models.shared;


public enum LicenseStatusEnum {
    AVAILABLE("AVAILABLE"),
    PENDING_AVAILABLE("PENDING_AVAILABLE"),
    DEACTIVATED("DEACTIVATED"),
    SUSPENDED("SUSPENDED"),
    EXPIRED("EXPIRED"),
    PENDING_DELETE("PENDING_DELETE"),
    DELETED("DELETED");

    public final String value;

    private LicenseStatusEnum(String value) {
        this.value = value;
    }
}
