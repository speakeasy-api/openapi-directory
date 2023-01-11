package openapisdk.models.shared;


public enum RedactionOutputEnum {
    REDACTED("redacted"),
    REDACTED_AND_UNREDACTED("redacted_and_unredacted");

    public final String value;

    private RedactionOutputEnum(String value) {
        this.value = value;
    }
}
