package openapisdk.models.shared;


public enum CanaryRunStateEnum {
    RUNNING("RUNNING"),
    PASSED("PASSED"),
    FAILED("FAILED");

    public final String value;

    private CanaryRunStateEnum(String value) {
        this.value = value;
    }
}
