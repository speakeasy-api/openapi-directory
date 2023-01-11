package openapisdk.models.shared;


public enum GameServerGroupStatusEnum {
    NEW_("NEW"),
    ACTIVATING("ACTIVATING"),
    ACTIVE("ACTIVE"),
    DELETE_SCHEDULED("DELETE_SCHEDULED"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    ERROR("ERROR");

    public final String value;

    private GameServerGroupStatusEnum(String value) {
        this.value = value;
    }
}
