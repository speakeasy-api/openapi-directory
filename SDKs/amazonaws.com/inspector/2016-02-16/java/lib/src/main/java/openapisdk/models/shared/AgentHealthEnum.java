package openapisdk.models.shared;


public enum AgentHealthEnum {
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private AgentHealthEnum(String value) {
        this.value = value;
    }
}
