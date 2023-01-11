package openapisdk.models.shared;


public enum AgentStatusEnum {
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY"),
    RUNNING("RUNNING"),
    UNKNOWN("UNKNOWN"),
    BLACKLISTED("BLACKLISTED"),
    SHUTDOWN("SHUTDOWN");

    public final String value;

    private AgentStatusEnum(String value) {
        this.value = value;
    }
}
