package openapisdk.models.shared;


public enum MailFromDomainStatusEnum {
    PENDING("PENDING"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED"),
    TEMPORARY_FAILURE("TEMPORARY_FAILURE");

    public final String value;

    private MailFromDomainStatusEnum(String value) {
        this.value = value;
    }
}
