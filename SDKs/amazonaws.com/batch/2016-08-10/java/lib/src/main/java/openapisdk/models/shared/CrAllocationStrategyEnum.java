package openapisdk.models.shared;


public enum CrAllocationStrategyEnum {
    BEST_FIT("BEST_FIT"),
    BEST_FIT_PROGRESSIVE("BEST_FIT_PROGRESSIVE"),
    SPOT_CAPACITY_OPTIMIZED("SPOT_CAPACITY_OPTIMIZED");

    public final String value;

    private CrAllocationStrategyEnum(String value) {
        this.value = value;
    }
}
