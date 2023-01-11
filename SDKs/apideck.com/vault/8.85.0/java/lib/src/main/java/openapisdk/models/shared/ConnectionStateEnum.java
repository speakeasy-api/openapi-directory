package openapisdk.models.shared;


public enum ConnectionStateEnum {
    AVAILABLE("available"),
    CALLABLE("callable"),
    ADDED("added"),
    AUTHORIZED("authorized");

    public final String value;

    private ConnectionStateEnum(String value) {
        this.value = value;
    }
}
