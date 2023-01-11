package openapisdk.models.shared;


public enum KeyStateEnum {
    CREATING("Creating"),
    ENABLED("Enabled"),
    DISABLED("Disabled"),
    PENDING_DELETION("PendingDeletion"),
    PENDING_IMPORT("PendingImport"),
    PENDING_REPLICA_DELETION("PendingReplicaDeletion"),
    UNAVAILABLE("Unavailable"),
    UPDATING("Updating");

    public final String value;

    private KeyStateEnum(String value) {
        this.value = value;
    }
}
