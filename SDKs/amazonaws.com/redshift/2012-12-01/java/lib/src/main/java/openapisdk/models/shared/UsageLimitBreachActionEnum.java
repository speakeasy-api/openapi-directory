package openapisdk.models.shared;


public enum UsageLimitBreachActionEnum {
    LOG("log"),
    EMIT_METRIC("emit-metric"),
    DISABLE("disable");

    public final String value;

    private UsageLimitBreachActionEnum(String value) {
        this.value = value;
    }
}
