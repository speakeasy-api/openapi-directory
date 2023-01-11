package openapisdk.models.shared;


public enum MessageEncodingEnum {
    TEXT("TEXT"),
    UNICODE("UNICODE"),
    BINARY("BINARY");

    public final String value;

    private MessageEncodingEnum(String value) {
        this.value = value;
    }
}
