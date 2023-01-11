package openapisdk.models.shared;


public enum StringFilterComparisonEnum {
    EQUALS("EQUALS"),
    PREFIX("PREFIX"),
    NOT_EQUALS("NOT_EQUALS"),
    PREFIX_NOT_EQUALS("PREFIX_NOT_EQUALS");

    public final String value;

    private StringFilterComparisonEnum(String value) {
        this.value = value;
    }
}
