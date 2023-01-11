package openapisdk.models.shared;


public enum DirectConnectGatewayStateEnum {
    PENDING("pending"),
    AVAILABLE("available"),
    DELETING("deleting"),
    DELETED("deleted");

    public final String value;

    private DirectConnectGatewayStateEnum(String value) {
        this.value = value;
    }
}
