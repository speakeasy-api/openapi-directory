package openapisdk.models.shared;


public enum ConsumerStatusEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE");

    public final String value;

    private ConsumerStatusEnum(String value) {
        this.value = value;
    }
}
