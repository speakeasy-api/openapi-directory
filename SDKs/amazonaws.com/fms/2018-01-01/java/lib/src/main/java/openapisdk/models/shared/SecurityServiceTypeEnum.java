package openapisdk.models.shared;


public enum SecurityServiceTypeEnum {
    WAF("WAF"),
    WAFV2("WAFV2"),
    SHIELD_ADVANCED("SHIELD_ADVANCED"),
    SECURITY_GROUPS_COMMON("SECURITY_GROUPS_COMMON"),
    SECURITY_GROUPS_CONTENT_AUDIT("SECURITY_GROUPS_CONTENT_AUDIT"),
    SECURITY_GROUPS_USAGE_AUDIT("SECURITY_GROUPS_USAGE_AUDIT"),
    NETWORK_FIREWALL("NETWORK_FIREWALL"),
    DNS_FIREWALL("DNS_FIREWALL");

    public final String value;

    private SecurityServiceTypeEnum(String value) {
        this.value = value;
    }
}
