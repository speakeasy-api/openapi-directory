package openapisdk.models.shared;


public enum InputFormatEnum {
    ONE_DOC_PER_FILE("ONE_DOC_PER_FILE"),
    ONE_DOC_PER_LINE("ONE_DOC_PER_LINE");

    public final String value;

    private InputFormatEnum(String value) {
        this.value = value;
    }
}
