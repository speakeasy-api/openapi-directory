package openapisdk.models.shared;


public enum RegionStatusEnum {
    ACTIVE("ACTIVE"),
    CREATING("CREATING"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private RegionStatusEnum(String value) {
        this.value = value;
    }
}
