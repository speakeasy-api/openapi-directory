package openapisdk.models.shared;


public enum ConnectionStateEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    AUTHORIZED("AUTHORIZED"),
    DEAUTHORIZED("DEAUTHORIZED"),
    AUTHORIZING("AUTHORIZING"),
    DEAUTHORIZING("DEAUTHORIZING");

    public final String value;

    private ConnectionStateEnum(String value) {
        this.value = value;
    }
}
