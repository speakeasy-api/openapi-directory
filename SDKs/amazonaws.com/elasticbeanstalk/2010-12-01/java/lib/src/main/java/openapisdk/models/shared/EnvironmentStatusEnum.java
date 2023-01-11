package openapisdk.models.shared;


public enum EnvironmentStatusEnum {
    ABORTING("Aborting"),
    LAUNCHING("Launching"),
    UPDATING("Updating"),
    LINKING_FROM("LinkingFrom"),
    LINKING_TO("LinkingTo"),
    READY("Ready"),
    TERMINATING("Terminating"),
    TERMINATED("Terminated");

    public final String value;

    private EnvironmentStatusEnum(String value) {
        this.value = value;
    }
}
