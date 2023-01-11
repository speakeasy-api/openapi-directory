package openapisdk.models.shared;


public enum DnsResponseTypeEnum {
    LOADBALANCER("LOADBALANCER"),
    ENDPOINTS("ENDPOINTS");

    public final String value;

    private DnsResponseTypeEnum(String value) {
        this.value = value;
    }
}
