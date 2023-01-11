package openapisdk.models.shared;


public enum StreamStatusEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING");

    public final String value;

    private StreamStatusEnum(String value) {
        this.value = value;
    }
}
