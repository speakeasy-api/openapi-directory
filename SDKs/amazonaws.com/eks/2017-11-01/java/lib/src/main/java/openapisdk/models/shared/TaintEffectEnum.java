package openapisdk.models.shared;


public enum TaintEffectEnum {
    NO_SCHEDULE("NO_SCHEDULE"),
    NO_EXECUTE("NO_EXECUTE"),
    PREFER_NO_SCHEDULE("PREFER_NO_SCHEDULE");

    public final String value;

    private TaintEffectEnum(String value) {
        this.value = value;
    }
}
