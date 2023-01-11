package openapisdk.models.shared;


public enum PortProtocolEnum {
    HTTP("http"),
    TCP("tcp");

    public final String value;

    private PortProtocolEnum(String value) {
        this.value = value;
    }
}
