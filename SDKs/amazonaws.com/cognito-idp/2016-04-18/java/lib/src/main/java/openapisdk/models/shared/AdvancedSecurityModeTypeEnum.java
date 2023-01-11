package openapisdk.models.shared;


public enum AdvancedSecurityModeTypeEnum {
    OFF("OFF"),
    AUDIT("AUDIT"),
    ENFORCED("ENFORCED");

    public final String value;

    private AdvancedSecurityModeTypeEnum(String value) {
        this.value = value;
    }
}
