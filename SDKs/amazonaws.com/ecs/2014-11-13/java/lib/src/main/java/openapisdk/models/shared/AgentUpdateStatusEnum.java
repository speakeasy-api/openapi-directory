package openapisdk.models.shared;


public enum AgentUpdateStatusEnum {
    PENDING("PENDING"),
    STAGING("STAGING"),
    STAGED("STAGED"),
    UPDATING("UPDATING"),
    UPDATED("UPDATED"),
    FAILED("FAILED");

    public final String value;

    private AgentUpdateStatusEnum(String value) {
        this.value = value;
    }
}
