package openapisdk.models.shared;


public enum IpAddressAssignmentEnum {
    DHCP("DHCP"),
    STATIC_("STATIC");

    public final String value;

    private IpAddressAssignmentEnum(String value) {
        this.value = value;
    }
}
