package openapisdk.models.shared;


public enum DirectConnectGatewayAttachmentStateEnum {
    ATTACHING("attaching"),
    ATTACHED("attached"),
    DETACHING("detaching"),
    DETACHED("detached");

    public final String value;

    private DirectConnectGatewayAttachmentStateEnum(String value) {
        this.value = value;
    }
}
