package openapisdk.models.shared;


public enum ConsumerConnectionStateEnum {
    AVAILABLE("available"),
    CALLABLE("callable"),
    ADDED("added"),
    CONFIGURED("configured"),
    AUTHORIZED("authorized");

    public final String value;

    private ConsumerConnectionStateEnum(String value) {
        this.value = value;
    }
}
