package openapisdk.models.shared;


public enum SortOrderEnum {
    ASC_LOWER("asc"),
    DESC_LOWER("desc"),
    ASC_UPPER("ASC"),
    DESC_UPPER("DESC");

    public final String value;

    private SortOrderEnum(String value) {
        this.value = value;
    }
}
