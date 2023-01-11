package openapisdk.models.shared;


public enum ModelStatusEnum {
    PENDING_BUILD("PENDING_BUILD"),
    ACTIVE("ACTIVE"),
    EXPIRED("EXPIRED");

    public final String value;

    private ModelStatusEnum(String value) {
        this.value = value;
    }
}
