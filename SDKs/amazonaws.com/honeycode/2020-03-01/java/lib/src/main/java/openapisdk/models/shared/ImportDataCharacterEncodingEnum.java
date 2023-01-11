package openapisdk.models.shared;


public enum ImportDataCharacterEncodingEnum {
    UTF8("UTF-8"),
    US_ASCII("US-ASCII"),
    ISO88591("ISO-8859-1"),
    UTF16_BE("UTF-16BE"),
    UTF16_LE("UTF-16LE"),
    UTF16("UTF-16");

    public final String value;

    private ImportDataCharacterEncodingEnum(String value) {
        this.value = value;
    }
}
