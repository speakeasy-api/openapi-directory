package openapisdk.models.shared;


public enum FindingStatusEnum {
    ACTIVE("ACTIVE"),
    ARCHIVED("ARCHIVED"),
    RESOLVED("RESOLVED");

    public final String value;

    private FindingStatusEnum(String value) {
        this.value = value;
    }
}
