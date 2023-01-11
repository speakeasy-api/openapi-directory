package openapisdk.models.shared;


public enum FailoverStatusEnum {
    PENDING("pending"),
    FAILING_OVER("failing-over"),
    CANCELLING("cancelling");

    public final String value;

    private FailoverStatusEnum(String value) {
        this.value = value;
    }
}
