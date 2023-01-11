package openapisdk.models.shared;


public enum ActivityStreamStatusEnum {
    STOPPED("stopped"),
    STARTING("starting"),
    STARTED("started"),
    STOPPING("stopping");

    public final String value;

    private ActivityStreamStatusEnum(String value) {
        this.value = value;
    }
}
