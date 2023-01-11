package openapisdk.models.shared;


public enum AccountTakeoverEventActionTypeEnum {
    BLOCK("BLOCK"),
    MFA_IF_CONFIGURED("MFA_IF_CONFIGURED"),
    MFA_REQUIRED("MFA_REQUIRED"),
    NO_ACTION("NO_ACTION");

    public final String value;

    private AccountTakeoverEventActionTypeEnum(String value) {
        this.value = value;
    }
}
