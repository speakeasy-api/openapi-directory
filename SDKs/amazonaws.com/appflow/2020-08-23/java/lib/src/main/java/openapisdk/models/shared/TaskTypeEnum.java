package openapisdk.models.shared;


public enum TaskTypeEnum {
    ARITHMETIC("Arithmetic"),
    FILTER("Filter"),
    MAP("Map"),
    MAP_ALL("Map_all"),
    MASK("Mask"),
    MERGE("Merge"),
    TRUNCATE("Truncate"),
    VALIDATE("Validate");

    public final String value;

    private TaskTypeEnum(String value) {
        this.value = value;
    }
}
