package openapisdk.models.shared;


public enum ParallelDataStatusEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private ParallelDataStatusEnum(String value) {
        this.value = value;
    }
}
