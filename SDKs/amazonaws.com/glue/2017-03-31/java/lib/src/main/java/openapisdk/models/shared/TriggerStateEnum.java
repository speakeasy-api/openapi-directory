package openapisdk.models.shared;


public enum TriggerStateEnum {
    CREATING("CREATING"),
    CREATED("CREATED"),
    ACTIVATING("ACTIVATING"),
    ACTIVATED("ACTIVATED"),
    DEACTIVATING("DEACTIVATING"),
    DEACTIVATED("DEACTIVATED"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private TriggerStateEnum(String value) {
        this.value = value;
    }
}
