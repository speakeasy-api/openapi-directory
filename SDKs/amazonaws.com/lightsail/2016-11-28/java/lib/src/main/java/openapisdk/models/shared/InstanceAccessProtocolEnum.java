package openapisdk.models.shared;


public enum InstanceAccessProtocolEnum {
    SSH("ssh"),
    RDP("rdp");

    public final String value;

    private InstanceAccessProtocolEnum(String value) {
        this.value = value;
    }
}
