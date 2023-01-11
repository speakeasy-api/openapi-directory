package openapisdk.models.shared;


public enum RunningModeEnum {
    AUTO_STOP("AUTO_STOP"),
    ALWAYS_ON("ALWAYS_ON");

    public final String value;

    private RunningModeEnum(String value) {
        this.value = value;
    }
}
