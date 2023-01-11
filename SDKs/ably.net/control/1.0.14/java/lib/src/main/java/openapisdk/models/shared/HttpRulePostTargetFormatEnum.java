package openapisdk.models.shared;


public enum HttpRulePostTargetFormatEnum {
    JSON("json"),
    MSGPACK("msgpack");

    public final String value;

    private HttpRulePostTargetFormatEnum(String value) {
        this.value = value;
    }
}
