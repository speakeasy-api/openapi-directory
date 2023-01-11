package openapisdk.models.shared;


public enum DatasetStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private DatasetStatusEnum(String value) {
        this.value = value;
    }
}
