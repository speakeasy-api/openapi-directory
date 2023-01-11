package openapisdk.models.shared;


public enum ColumnMappingStatusEnum {
    WARNING("warning"),
    SUCCESS("success"),
    FAILED("failed");

    public final String value;

    private ColumnMappingStatusEnum(String value) {
        this.value = value;
    }
}
