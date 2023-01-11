package openapisdk.models.shared;


public enum MeasureValueTypeEnum {
    DOUBLE("DOUBLE"),
    BIGINT("BIGINT"),
    VARCHAR("VARCHAR"),
    BOOLEAN_("BOOLEAN");

    public final String value;

    private MeasureValueTypeEnum(String value) {
        this.value = value;
    }
}
