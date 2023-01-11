package openapisdk.models.shared;


public enum AdminStatusEnum {
    ENABLED("ENABLED"),
    DISABLE_IN_PROGRESS("DISABLE_IN_PROGRESS");

    public final String value;

    private AdminStatusEnum(String value) {
        this.value = value;
    }
}
