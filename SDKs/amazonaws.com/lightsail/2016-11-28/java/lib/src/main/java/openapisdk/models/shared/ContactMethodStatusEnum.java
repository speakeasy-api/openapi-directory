package openapisdk.models.shared;


public enum ContactMethodStatusEnum {
    PENDING_VERIFICATION("PendingVerification"),
    VALID("Valid"),
    INVALID("Invalid");

    public final String value;

    private ContactMethodStatusEnum(String value) {
        this.value = value;
    }
}
