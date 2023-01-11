package openapisdk.models.shared;


public enum DatasetContentStateEnum {
    CREATING("CREATING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private DatasetContentStateEnum(String value) {
        this.value = value;
    }
}
