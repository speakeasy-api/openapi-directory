package openapisdk.models.shared;


public enum SpotAllocationStrategyEnum {
    LOWEST_PRICE("lowest-price"),
    DIVERSIFIED("diversified"),
    CAPACITY_OPTIMIZED("capacity-optimized"),
    CAPACITY_OPTIMIZED_PRIORITIZED("capacity-optimized-prioritized");

    public final String value;

    private SpotAllocationStrategyEnum(String value) {
        this.value = value;
    }
}
