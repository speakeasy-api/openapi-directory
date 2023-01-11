package openapisdk.models.shared;


public enum DataReplicationStateEnum {
    STOPPED("STOPPED"),
    INITIATING("INITIATING"),
    INITIAL_SYNC("INITIAL_SYNC"),
    BACKLOG("BACKLOG"),
    CREATING_SNAPSHOT("CREATING_SNAPSHOT"),
    CONTINUOUS("CONTINUOUS"),
    PAUSED("PAUSED"),
    RESCAN("RESCAN"),
    STALLED("STALLED"),
    DISCONNECTED("DISCONNECTED");

    public final String value;

    private DataReplicationStateEnum(String value) {
        this.value = value;
    }
}
