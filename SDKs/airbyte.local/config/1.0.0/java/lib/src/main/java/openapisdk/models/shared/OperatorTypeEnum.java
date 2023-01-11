package openapisdk.models.shared;


public enum OperatorTypeEnum {
    NORMALIZATION("normalization"),
    DBT("dbt");

    public final String value;

    private OperatorTypeEnum(String value) {
        this.value = value;
    }
}
