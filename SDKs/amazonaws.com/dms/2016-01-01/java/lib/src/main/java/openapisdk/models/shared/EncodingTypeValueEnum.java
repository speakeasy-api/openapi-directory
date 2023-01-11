package openapisdk.models.shared;


public enum EncodingTypeValueEnum {
    PLAIN("plain"),
    PLAIN_DICTIONARY("plain-dictionary"),
    RLE_DICTIONARY("rle-dictionary");

    public final String value;

    private EncodingTypeValueEnum(String value) {
        this.value = value;
    }
}
