package openapisdk.models.operations;


public enum IssuesLockRequestBodyLockReasonEnum {
    OFF_TOPIC("off-topic"),
    TOO_HEATED("too heated"),
    RESOLVED("resolved"),
    SPAM("spam");

    public final String value;

    private IssuesLockRequestBodyLockReasonEnum(String value) {
        this.value = value;
    }
}
