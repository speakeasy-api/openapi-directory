package openapisdk.models.shared;


public enum AgentStatusEnum {
    ONLINE("ONLINE"),
    OFFLINE("OFFLINE");

    public final String value;

    private AgentStatusEnum(String value) {
        this.value = value;
    }
}
