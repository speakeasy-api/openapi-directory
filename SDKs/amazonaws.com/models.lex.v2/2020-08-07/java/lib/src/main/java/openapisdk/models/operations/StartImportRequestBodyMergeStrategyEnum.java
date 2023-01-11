package openapisdk.models.operations;


public enum StartImportRequestBodyMergeStrategyEnum {
    OVERWRITE("Overwrite"),
    FAIL_ON_CONFLICT("FailOnConflict");

    public final String value;

    private StartImportRequestBodyMergeStrategyEnum(String value) {
        this.value = value;
    }
}
