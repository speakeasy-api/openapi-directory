package openapisdk.models.shared;


public enum AssetModelStateEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    PROPAGATING("PROPAGATING"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private AssetModelStateEnum(String value) {
        this.value = value;
    }
}
