package openapisdk.models.shared;


public enum CodeSigningPolicyEnum {
    WARN("Warn"),
    ENFORCE("Enforce");

    public final String value;

    private CodeSigningPolicyEnum(String value) {
        this.value = value;
    }
}
