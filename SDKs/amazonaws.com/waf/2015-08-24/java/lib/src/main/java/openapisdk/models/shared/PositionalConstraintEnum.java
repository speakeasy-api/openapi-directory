package openapisdk.models.shared;


public enum PositionalConstraintEnum {
    EXACTLY("EXACTLY"),
    STARTS_WITH("STARTS_WITH"),
    ENDS_WITH("ENDS_WITH"),
    CONTAINS("CONTAINS"),
    CONTAINS_WORD("CONTAINS_WORD");

    public final String value;

    private PositionalConstraintEnum(String value) {
        this.value = value;
    }
}
