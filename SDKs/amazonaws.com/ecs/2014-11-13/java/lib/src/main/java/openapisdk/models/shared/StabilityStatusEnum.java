package openapisdk.models.shared;


public enum StabilityStatusEnum {
    STEADY_STATE("STEADY_STATE"),
    STABILIZING("STABILIZING");

    public final String value;

    private StabilityStatusEnum(String value) {
        this.value = value;
    }
}
