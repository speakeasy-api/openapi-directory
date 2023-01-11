package openapisdk.models.shared;


public enum ControlSetStatusEnum {
    ACTIVE("ACTIVE"),
    UNDER_REVIEW("UNDER_REVIEW"),
    REVIEWED("REVIEWED");

    public final String value;

    private ControlSetStatusEnum(String value) {
        this.value = value;
    }
}
