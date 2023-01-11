package openapisdk.models.shared;


public enum AuthDecisionEnum {
    ALLOWED("ALLOWED"),
    EXPLICIT_DENY("EXPLICIT_DENY"),
    IMPLICIT_DENY("IMPLICIT_DENY");

    public final String value;

    private AuthDecisionEnum(String value) {
        this.value = value;
    }
}
