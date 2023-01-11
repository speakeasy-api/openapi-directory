package openapisdk.models.shared;


public enum FirewallStatusValueEnum {
    PROVISIONING("PROVISIONING"),
    DELETING("DELETING"),
    READY("READY");

    public final String value;

    private FirewallStatusValueEnum(String value) {
        this.value = value;
    }
}
