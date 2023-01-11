package openapisdk.models.shared;


public enum ConfigStatusEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE");

    public final String value;

    private ConfigStatusEnum(String value) {
        this.value = value;
    }
}
