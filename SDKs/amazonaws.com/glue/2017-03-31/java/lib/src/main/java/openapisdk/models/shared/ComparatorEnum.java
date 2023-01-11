package openapisdk.models.shared;


public enum ComparatorEnum {
    EQUALS("EQUALS"),
    GREATER_THAN("GREATER_THAN"),
    LESS_THAN("LESS_THAN"),
    GREATER_THAN_EQUALS("GREATER_THAN_EQUALS"),
    LESS_THAN_EQUALS("LESS_THAN_EQUALS");

    public final String value;

    private ComparatorEnum(String value) {
        this.value = value;
    }
}
