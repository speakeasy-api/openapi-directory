package openapisdk.models.shared;


public enum ColumnStatisticsTypeEnum {
    BOOLEAN_("BOOLEAN"),
    DATE("DATE"),
    DECIMAL("DECIMAL"),
    DOUBLE("DOUBLE"),
    LONG_("LONG"),
    STRING("STRING"),
    BINARY("BINARY");

    public final String value;

    private ColumnStatisticsTypeEnum(String value) {
        this.value = value;
    }
}
