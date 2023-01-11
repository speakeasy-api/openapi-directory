package openapisdk.models.shared;


public enum HttpRuleResponseTargetFormatEnum {
    JSON("json"),
    MSGPACK("msgpack");

    public final String value;

    private HttpRuleResponseTargetFormatEnum(String value) {
        this.value = value;
    }
}
