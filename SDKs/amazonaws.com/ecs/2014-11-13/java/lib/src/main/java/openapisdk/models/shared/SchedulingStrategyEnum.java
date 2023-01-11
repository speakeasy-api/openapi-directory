package openapisdk.models.shared;


public enum SchedulingStrategyEnum {
    REPLICA("REPLICA"),
    DAEMON("DAEMON");

    public final String value;

    private SchedulingStrategyEnum(String value) {
        this.value = value;
    }
}
