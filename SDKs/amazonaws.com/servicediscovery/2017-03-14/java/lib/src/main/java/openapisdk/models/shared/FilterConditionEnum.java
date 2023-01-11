package openapisdk.models.shared;


public enum FilterConditionEnum {
    EQ("EQ"),
    IN("IN"),
    BETWEEN("BETWEEN");

    public final String value;

    private FilterConditionEnum(String value) {
        this.value = value;
    }
}
