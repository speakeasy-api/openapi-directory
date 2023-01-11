package openapisdk.models.shared;


public enum StatementStatusStringEnum {
    SUBMITTED("SUBMITTED"),
    PICKED("PICKED"),
    STARTED("STARTED"),
    FINISHED("FINISHED"),
    ABORTED("ABORTED"),
    FAILED("FAILED");

    public final String value;

    private StatementStatusStringEnum(String value) {
        this.value = value;
    }
}
