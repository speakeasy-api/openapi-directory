package openapisdk.models.operations;


public enum BatchUpdateFindingsRequestBodyVerificationStateEnum {
    UNKNOWN("UNKNOWN"),
    TRUE_POSITIVE("TRUE_POSITIVE"),
    FALSE_POSITIVE("FALSE_POSITIVE"),
    BENIGN_POSITIVE("BENIGN_POSITIVE");

    public final String value;

    private BatchUpdateFindingsRequestBodyVerificationStateEnum(String value) {
        this.value = value;
    }
}
