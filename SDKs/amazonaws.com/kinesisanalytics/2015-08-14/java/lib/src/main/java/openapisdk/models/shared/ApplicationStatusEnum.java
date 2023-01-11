package openapisdk.models.shared;


public enum ApplicationStatusEnum {
    DELETING("DELETING"),
    STARTING("STARTING"),
    STOPPING("STOPPING"),
    READY("READY"),
    RUNNING("RUNNING"),
    UPDATING("UPDATING");

    public final String value;

    private ApplicationStatusEnum(String value) {
        this.value = value;
    }
}
