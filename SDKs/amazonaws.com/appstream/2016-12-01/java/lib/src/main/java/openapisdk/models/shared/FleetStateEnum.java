package openapisdk.models.shared;


public enum FleetStateEnum {
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED");

    public final String value;

    private FleetStateEnum(String value) {
        this.value = value;
    }
}
