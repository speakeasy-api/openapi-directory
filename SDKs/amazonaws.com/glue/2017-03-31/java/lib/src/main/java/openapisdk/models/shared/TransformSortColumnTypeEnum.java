package openapisdk.models.shared;


public enum TransformSortColumnTypeEnum {
    NAME("NAME"),
    TRANSFORM_TYPE("TRANSFORM_TYPE"),
    STATUS("STATUS"),
    CREATED("CREATED"),
    LAST_MODIFIED("LAST_MODIFIED");

    public final String value;

    private TransformSortColumnTypeEnum(String value) {
        this.value = value;
    }
}
