package openapisdk.models.shared;


public enum ActivityStreamModeEnum {
    SYNC("sync"),
    ASYNC("async");

    public final String value;

    private ActivityStreamModeEnum(String value) {
        this.value = value;
    }
}
