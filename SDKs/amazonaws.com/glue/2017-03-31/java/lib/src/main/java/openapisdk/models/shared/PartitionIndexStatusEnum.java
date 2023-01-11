package openapisdk.models.shared;


public enum PartitionIndexStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private PartitionIndexStatusEnum(String value) {
        this.value = value;
    }
}
