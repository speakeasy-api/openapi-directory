package openapisdk.models.shared;


public enum ResponseFormatEnum {
    JSON("json"),
    JSONP("jsonp"),
    MSGPACK("msgpack"),
    HTML("html");

    public final String value;

    private ResponseFormatEnum(String value) {
        this.value = value;
    }
}
