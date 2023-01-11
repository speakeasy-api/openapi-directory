package openapisdk.models.shared;


public enum BeezUpCommonParameterTypeEnum {
    STRING("string"),
    INTEGER("integer"),
    NUMBER("number"),
    BOOLEAN_("boolean"),
    OBJECT("object"),
    ARRAY("array"),
    DATE("date"),
    DATE_TIME("date-time");

    public final String value;

    private BeezUpCommonParameterTypeEnum(String value) {
        this.value = value;
    }
}
