package openapisdk.models.shared;


public enum CustomMailFromStatusEnum {
    PENDING("Pending"),
    SUCCESS("Success"),
    FAILED("Failed"),
    TEMPORARY_FAILURE("TemporaryFailure");

    public final String value;

    private CustomMailFromStatusEnum(String value) {
        this.value = value;
    }
}
