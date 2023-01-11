package openapisdk.models.shared;


public enum TrafficRoutingTypeEnum {
    TIME_BASED_CANARY("TimeBasedCanary"),
    TIME_BASED_LINEAR("TimeBasedLinear"),
    ALL_AT_ONCE("AllAtOnce");

    public final String value;

    private TrafficRoutingTypeEnum(String value) {
        this.value = value;
    }
}
