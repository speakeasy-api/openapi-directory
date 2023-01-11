package openapisdk.models.shared;


public enum DirectConnectGatewayAttachmentTypeEnum {
    TRANSIT_VIRTUAL_INTERFACE("TransitVirtualInterface"),
    PRIVATE_VIRTUAL_INTERFACE("PrivateVirtualInterface");

    public final String value;

    private DirectConnectGatewayAttachmentTypeEnum(String value) {
        this.value = value;
    }
}
