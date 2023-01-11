package openapisdk.models.shared;


public enum CanaryStateEnum {
    CREATING("CREATING"),
    READY("READY"),
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    UPDATING("UPDATING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    ERROR("ERROR"),
    DELETING("DELETING");

    public final String value;

    private CanaryStateEnum(String value) {
        this.value = value;
    }
}
