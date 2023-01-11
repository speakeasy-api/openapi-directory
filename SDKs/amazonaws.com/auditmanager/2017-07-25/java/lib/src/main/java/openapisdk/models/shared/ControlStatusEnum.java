package openapisdk.models.shared;


public enum ControlStatusEnum {
    UNDER_REVIEW("UNDER_REVIEW"),
    REVIEWED("REVIEWED"),
    INACTIVE("INACTIVE");

    public final String value;

    private ControlStatusEnum(String value) {
        this.value = value;
    }
}
