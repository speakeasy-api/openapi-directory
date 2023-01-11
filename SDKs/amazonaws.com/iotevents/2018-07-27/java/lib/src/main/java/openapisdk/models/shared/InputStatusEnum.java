package openapisdk.models.shared;


public enum InputStatusEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private InputStatusEnum(String value) {
        this.value = value;
    }
}
