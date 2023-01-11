package openapisdk.models.shared;


public enum NotifyWorkersFailureCodeEnum {
    SOFT_FAILURE("SoftFailure"),
    HARD_FAILURE("HardFailure");

    public final String value;

    private NotifyWorkersFailureCodeEnum(String value) {
        this.value = value;
    }
}
