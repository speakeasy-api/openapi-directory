package openapisdk.models.shared;


public enum SamplingStrategyNameEnum {
    PARTIAL_SCAN("PartialScan"),
    FIXED_RATE("FixedRate");

    public final String value;

    private SamplingStrategyNameEnum(String value) {
        this.value = value;
    }
}
