package openapisdk.models.shared;


public enum CanaryRunStateReasonCodeEnum {
    CANARY_FAILURE("CANARY_FAILURE"),
    EXECUTION_FAILURE("EXECUTION_FAILURE");

    public final String value;

    private CanaryRunStateReasonCodeEnum(String value) {
        this.value = value;
    }
}
