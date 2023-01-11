package openapisdk.models.shared;


public enum VerificationStateEnum {
    UNKNOWN("UNKNOWN"),
    TRUE_POSITIVE("TRUE_POSITIVE"),
    FALSE_POSITIVE("FALSE_POSITIVE"),
    BENIGN_POSITIVE("BENIGN_POSITIVE");

    public final String value;

    private VerificationStateEnum(String value) {
        this.value = value;
    }
}
