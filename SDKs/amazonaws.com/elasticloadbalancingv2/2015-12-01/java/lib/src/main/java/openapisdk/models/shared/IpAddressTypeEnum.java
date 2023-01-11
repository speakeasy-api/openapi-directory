package openapisdk.models.shared;


public enum IpAddressTypeEnum {
    IPV4("ipv4"),
    DUALSTACK("dualstack");

    public final String value;

    private IpAddressTypeEnum(String value) {
        this.value = value;
    }
}
