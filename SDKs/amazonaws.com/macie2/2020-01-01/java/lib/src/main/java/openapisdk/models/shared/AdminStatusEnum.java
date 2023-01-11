package openapisdk.models.shared;


public enum AdminStatusEnum {
    ENABLED("ENABLED"),
    DISABLING_IN_PROGRESS("DISABLING_IN_PROGRESS");

    public final String value;

    private AdminStatusEnum(String value) {
        this.value = value;
    }
}
