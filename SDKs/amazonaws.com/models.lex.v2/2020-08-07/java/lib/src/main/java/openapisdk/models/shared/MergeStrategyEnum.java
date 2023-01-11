package openapisdk.models.shared;


public enum MergeStrategyEnum {
    OVERWRITE("Overwrite"),
    FAIL_ON_CONFLICT("FailOnConflict");

    public final String value;

    private MergeStrategyEnum(String value) {
        this.value = value;
    }
}
