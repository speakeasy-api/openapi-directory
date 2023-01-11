package openapisdk.models.shared;


public enum NamespaceTypeEnum {
    DNS_PUBLIC("DNS_PUBLIC"),
    DNS_PRIVATE("DNS_PRIVATE"),
    HTTP("HTTP");

    public final String value;

    private NamespaceTypeEnum(String value) {
        this.value = value;
    }
}
