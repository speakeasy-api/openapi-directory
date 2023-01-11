package openapisdk.models.shared;


public enum ConnectorStateEnum {
    RUNNING("RUNNING"),
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private ConnectorStateEnum(String value) {
        this.value = value;
    }
}
