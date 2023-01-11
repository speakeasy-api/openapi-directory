package openapisdk.models.shared;


public enum TextTransformationEnum {
    NONE("NONE"),
    COMPRESS_WHITE_SPACE("COMPRESS_WHITE_SPACE"),
    HTML_ENTITY_DECODE("HTML_ENTITY_DECODE"),
    LOWERCASE("LOWERCASE"),
    CMD_LINE("CMD_LINE"),
    URL_DECODE("URL_DECODE");

    public final String value;

    private TextTransformationEnum(String value) {
        this.value = value;
    }
}
