package openapisdk.models.shared;


public enum CategoryMappingStatusEnum {
    WARNING("warning"),
    SUCCESS("success"),
    FAILED("failed");

    public final String value;

    private CategoryMappingStatusEnum(String value) {
        this.value = value;
    }
}
