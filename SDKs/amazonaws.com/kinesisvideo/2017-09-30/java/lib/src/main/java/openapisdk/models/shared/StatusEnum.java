package openapisdk.models.shared;


public enum StatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
