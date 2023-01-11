package openapisdk.models.shared;


public enum AwsJobAbortCriteriaFailureTypeEnum {
    FAILED("FAILED"),
    REJECTED("REJECTED"),
    TIMED_OUT("TIMED_OUT"),
    ALL("ALL");

    public final String value;

    private AwsJobAbortCriteriaFailureTypeEnum(String value) {
        this.value = value;
    }
}
