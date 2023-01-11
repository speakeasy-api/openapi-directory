package openapisdk.models.shared;


public enum RenewalStatusEnum {
    PENDING_AUTO_RENEWAL("PendingAutoRenewal"),
    PENDING_VALIDATION("PendingValidation"),
    SUCCESS("Success"),
    FAILED("Failed");

    public final String value;

    private RenewalStatusEnum(String value) {
        this.value = value;
    }
}
