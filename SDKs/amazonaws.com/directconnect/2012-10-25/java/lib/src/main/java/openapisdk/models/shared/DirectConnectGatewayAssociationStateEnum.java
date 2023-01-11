package openapisdk.models.shared;


public enum DirectConnectGatewayAssociationStateEnum {
    ASSOCIATING("associating"),
    ASSOCIATED("associated"),
    DISASSOCIATING("disassociating"),
    DISASSOCIATED("disassociated"),
    UPDATING("updating");

    public final String value;

    private DirectConnectGatewayAssociationStateEnum(String value) {
        this.value = value;
    }
}
