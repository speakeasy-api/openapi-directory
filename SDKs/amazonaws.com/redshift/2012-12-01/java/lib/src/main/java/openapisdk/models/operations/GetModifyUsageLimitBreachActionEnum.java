package openapisdk.models.operations;


public enum GetModifyUsageLimitBreachActionEnum {
    LOG("log"),
    EMIT_METRIC("emit-metric"),
    DISABLE("disable");

    public final String value;

    private GetModifyUsageLimitBreachActionEnum(String value) {
        this.value = value;
    }
}
