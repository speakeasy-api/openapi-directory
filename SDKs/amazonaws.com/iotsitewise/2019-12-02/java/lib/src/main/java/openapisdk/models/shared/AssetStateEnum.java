package openapisdk.models.shared;


public enum AssetStateEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private AssetStateEnum(String value) {
        this.value = value;
    }
}
