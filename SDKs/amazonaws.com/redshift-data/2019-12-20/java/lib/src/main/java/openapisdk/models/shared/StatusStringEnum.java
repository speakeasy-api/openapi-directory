package openapisdk.models.shared;


public enum StatusStringEnum {
    SUBMITTED("SUBMITTED"),
    PICKED("PICKED"),
    STARTED("STARTED"),
    FINISHED("FINISHED"),
    ABORTED("ABORTED"),
    FAILED("FAILED"),
    ALL("ALL");

    public final String value;

    private StatusStringEnum(String value) {
        this.value = value;
    }
}
