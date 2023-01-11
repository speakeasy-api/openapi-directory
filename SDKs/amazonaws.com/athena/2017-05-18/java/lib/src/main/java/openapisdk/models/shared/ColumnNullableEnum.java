package openapisdk.models.shared;


public enum ColumnNullableEnum {
    NOT_NULL("NOT_NULL"),
    NULLABLE("NULLABLE"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private ColumnNullableEnum(String value) {
        this.value = value;
    }
}
