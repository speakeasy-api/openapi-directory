package openapisdk.models.shared;


public enum ServiceTypeEnum {
    HTTP("HTTP"),
    DNS_HTTP("DNS_HTTP"),
    DNS("DNS");

    public final String value;

    private ServiceTypeEnum(String value) {
        this.value = value;
    }
}
