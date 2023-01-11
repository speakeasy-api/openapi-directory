package openapisdk.models.shared;


public enum FieldPurposeEnum {
    UNKNOWN(""),
    USERNAME("USERNAME"),
    PASSWORD("PASSWORD"),
    NOTES("NOTES");

    public final String value;

    private FieldPurposeEnum(String value) {
        this.value = value;
    }
}
