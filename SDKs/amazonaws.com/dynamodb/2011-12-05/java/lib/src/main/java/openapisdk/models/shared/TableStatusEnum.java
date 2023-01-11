package openapisdk.models.shared;


public enum TableStatusEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE");

    public final String value;

    private TableStatusEnum(String value) {
        this.value = value;
    }
}
