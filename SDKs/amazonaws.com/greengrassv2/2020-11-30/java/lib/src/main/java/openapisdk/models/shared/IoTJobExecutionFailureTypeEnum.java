package openapisdk.models.shared;


public enum IoTJobExecutionFailureTypeEnum {
    FAILED("FAILED"),
    REJECTED("REJECTED"),
    TIMED_OUT("TIMED_OUT"),
    ALL("ALL");

    public final String value;

    private IoTJobExecutionFailureTypeEnum(String value) {
        this.value = value;
    }
}
