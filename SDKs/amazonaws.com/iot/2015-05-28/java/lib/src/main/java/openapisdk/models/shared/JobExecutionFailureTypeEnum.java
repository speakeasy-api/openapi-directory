package openapisdk.models.shared;


public enum JobExecutionFailureTypeEnum {
    FAILED("FAILED"),
    REJECTED("REJECTED"),
    TIMED_OUT("TIMED_OUT"),
    ALL("ALL");

    public final String value;

    private JobExecutionFailureTypeEnum(String value) {
        this.value = value;
    }
}
