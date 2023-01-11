package openapisdk.models.shared;


public enum HttpRulePatchTargetFormatEnum {
    JSON("json"),
    MSGPACK("msgpack");

    public final String value;

    private HttpRulePatchTargetFormatEnum(String value) {
        this.value = value;
    }
}
