package openapisdk.models.shared;


public enum AttemptStatusEnum {
    RUNNING("running"),
    FAILED("failed"),
    SUCCEEDED("succeeded");

    public final String value;

    private AttemptStatusEnum(String value) {
        this.value = value;
    }
}
