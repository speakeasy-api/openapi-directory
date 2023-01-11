package openapisdk.models.shared;


public enum FleetStatusEnum {
    NEW_("NEW"),
    DOWNLOADING("DOWNLOADING"),
    VALIDATING("VALIDATING"),
    BUILDING("BUILDING"),
    ACTIVATING("ACTIVATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    ERROR("ERROR"),
    TERMINATED("TERMINATED");

    public final String value;

    private FleetStatusEnum(String value) {
        this.value = value;
    }
}
