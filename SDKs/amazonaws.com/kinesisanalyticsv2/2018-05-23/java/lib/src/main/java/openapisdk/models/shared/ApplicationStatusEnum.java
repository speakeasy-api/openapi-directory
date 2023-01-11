package openapisdk.models.shared;


public enum ApplicationStatusEnum {
    DELETING("DELETING"),
    STARTING("STARTING"),
    STOPPING("STOPPING"),
    READY("READY"),
    RUNNING("RUNNING"),
    UPDATING("UPDATING"),
    AUTOSCALING("AUTOSCALING"),
    FORCE_STOPPING("FORCE_STOPPING"),
    MAINTENANCE("MAINTENANCE"),
    ROLLING_BACK("ROLLING_BACK"),
    ROLLED_BACK("ROLLED_BACK");

    public final String value;

    private ApplicationStatusEnum(String value) {
        this.value = value;
    }
}
