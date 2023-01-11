package openapisdk.models.shared;


public enum TracingModeEnum {
    ACTIVE("Active"),
    PASS_THROUGH("PassThrough");

    public final String value;

    private TracingModeEnum(String value) {
        this.value = value;
    }
}
