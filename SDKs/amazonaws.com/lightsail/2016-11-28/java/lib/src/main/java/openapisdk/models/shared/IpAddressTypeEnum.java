package openapisdk.models.shared;


public enum IpAddressTypeEnum {
    DUALSTACK("dualstack"),
    IPV4("ipv4");

    public final String value;

    private IpAddressTypeEnum(String value) {
        this.value = value;
    }
}
