package openapisdk.models.shared;


public enum ProtocolEnum {
    TCP("TCP"),
    UDP("UDP");

    public final String value;

    private ProtocolEnum(String value) {
        this.value = value;
    }
}
