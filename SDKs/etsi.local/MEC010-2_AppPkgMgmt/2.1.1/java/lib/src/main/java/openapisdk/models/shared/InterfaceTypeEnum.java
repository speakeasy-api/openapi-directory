package openapisdk.models.shared;


public enum InterfaceTypeEnum {
    TUNNEL("TUNNEL"),
    MAC("MAC"),
    IP("IP");

    public final String value;

    private InterfaceTypeEnum(String value) {
        this.value = value;
    }
}
