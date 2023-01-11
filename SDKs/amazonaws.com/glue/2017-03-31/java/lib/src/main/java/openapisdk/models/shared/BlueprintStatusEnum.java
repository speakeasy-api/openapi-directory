package openapisdk.models.shared;


public enum BlueprintStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    FAILED("FAILED");

    public final String value;

    private BlueprintStatusEnum(String value) {
        this.value = value;
    }
}
