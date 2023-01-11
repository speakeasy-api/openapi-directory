package openapisdk.models.shared;


public enum AgentHealthCodeEnum {
    IDLE("IDLE"),
    RUNNING("RUNNING"),
    SHUTDOWN("SHUTDOWN"),
    UNHEALTHY("UNHEALTHY"),
    THROTTLED("THROTTLED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private AgentHealthCodeEnum(String value) {
        this.value = value;
    }
}
