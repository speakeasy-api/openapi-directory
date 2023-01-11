package openapisdk.models.shared;


public enum ProtectionPolicyEnum {
    NO_PROTECTION("NoProtection"),
    FULL_PROTECTION("FullProtection");

    public final String value;

    private ProtectionPolicyEnum(String value) {
        this.value = value;
    }
}
