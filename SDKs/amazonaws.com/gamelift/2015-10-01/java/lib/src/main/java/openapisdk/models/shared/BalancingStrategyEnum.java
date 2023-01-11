package openapisdk.models.shared;


public enum BalancingStrategyEnum {
    SPOT_ONLY("SPOT_ONLY"),
    SPOT_PREFERRED("SPOT_PREFERRED"),
    ON_DEMAND_ONLY("ON_DEMAND_ONLY");

    public final String value;

    private BalancingStrategyEnum(String value) {
        this.value = value;
    }
}
