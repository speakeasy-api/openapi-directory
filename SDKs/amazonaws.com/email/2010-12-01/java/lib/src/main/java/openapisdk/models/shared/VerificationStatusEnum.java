package openapisdk.models.shared;


public enum VerificationStatusEnum {
    PENDING("Pending"),
    SUCCESS("Success"),
    FAILED("Failed"),
    TEMPORARY_FAILURE("TemporaryFailure"),
    NOT_STARTED("NotStarted");

    public final String value;

    private VerificationStatusEnum(String value) {
        this.value = value;
    }
}
