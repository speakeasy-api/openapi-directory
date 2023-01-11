package openapisdk.models.shared;


public enum DomainStatusEnum {
    PENDING_VALIDATION("PENDING_VALIDATION"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private DomainStatusEnum(String value) {
        this.value = value;
    }
}
