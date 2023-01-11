package openapisdk.models.shared;


public enum RenewalStatusEnum {
    PENDING_AUTO_RENEWAL("PENDING_AUTO_RENEWAL"),
    PENDING_VALIDATION("PENDING_VALIDATION"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private RenewalStatusEnum(String value) {
        this.value = value;
    }
}
