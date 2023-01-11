package openapisdk.models.shared;


public enum ConsumptionAvailabilityStatusEnum {
    AVAILABLE("Available"),
    DEGRADED("Degraded"),
    UNAVAILABLE("Unavailable");

    public final String value;

    private ConsumptionAvailabilityStatusEnum(String value) {
        this.value = value;
    }
}
