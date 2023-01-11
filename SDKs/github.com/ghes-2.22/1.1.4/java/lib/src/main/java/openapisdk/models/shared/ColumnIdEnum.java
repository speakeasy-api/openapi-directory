package openapisdk.models.shared;


public enum ColumnIdEnum {
    ALL("all"),
    ARCHIVED("archived"),
    NOT_ARCHIVED("not_archived");

    public final String value;

    private ColumnIdEnum(String value) {
        this.value = value;
    }
}
