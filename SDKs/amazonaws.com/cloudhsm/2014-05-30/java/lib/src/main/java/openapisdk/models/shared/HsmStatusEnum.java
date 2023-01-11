package openapisdk.models.shared;


public enum HsmStatusEnum {
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    UPDATING("UPDATING"),
    SUSPENDED("SUSPENDED"),
    TERMINATING("TERMINATING"),
    TERMINATED("TERMINATED"),
    DEGRADED("DEGRADED");

    public final String value;

    private HsmStatusEnum(String value) {
        this.value = value;
    }
}
