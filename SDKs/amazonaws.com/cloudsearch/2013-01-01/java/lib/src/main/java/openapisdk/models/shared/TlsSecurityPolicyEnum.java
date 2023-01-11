package openapisdk.models.shared;


public enum TlsSecurityPolicyEnum {
    POLICY_MIN_TLS10201907("Policy-Min-TLS-1-0-2019-07"),
    POLICY_MIN_TLS12201907("Policy-Min-TLS-1-2-2019-07");

    public final String value;

    private TlsSecurityPolicyEnum(String value) {
        this.value = value;
    }
}
