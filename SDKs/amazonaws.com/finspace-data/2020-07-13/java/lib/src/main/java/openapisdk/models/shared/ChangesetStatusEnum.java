package openapisdk.models.shared;


public enum ChangesetStatusEnum {
    PENDING("PENDING"),
    FAILED("FAILED"),
    SUCCESS("SUCCESS"),
    RUNNING("RUNNING"),
    STOP_REQUESTED("STOP_REQUESTED");

    public final String value;

    private ChangesetStatusEnum(String value) {
        this.value = value;
    }
}
