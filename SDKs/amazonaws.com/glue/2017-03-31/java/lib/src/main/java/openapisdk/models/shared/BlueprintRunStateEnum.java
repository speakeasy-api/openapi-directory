package openapisdk.models.shared;


public enum BlueprintRunStateEnum {
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    ROLLING_BACK("ROLLING_BACK");

    public final String value;

    private BlueprintRunStateEnum(String value) {
        this.value = value;
    }
}
