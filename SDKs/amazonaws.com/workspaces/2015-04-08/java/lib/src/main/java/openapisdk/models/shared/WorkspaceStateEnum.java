package openapisdk.models.shared;


public enum WorkspaceStateEnum {
    PENDING("PENDING"),
    AVAILABLE("AVAILABLE"),
    IMPAIRED("IMPAIRED"),
    UNHEALTHY("UNHEALTHY"),
    REBOOTING("REBOOTING"),
    STARTING("STARTING"),
    REBUILDING("REBUILDING"),
    RESTORING("RESTORING"),
    MAINTENANCE("MAINTENANCE"),
    ADMIN_MAINTENANCE("ADMIN_MAINTENANCE"),
    TERMINATING("TERMINATING"),
    TERMINATED("TERMINATED"),
    SUSPENDED("SUSPENDED"),
    UPDATING("UPDATING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    ERROR("ERROR");

    public final String value;

    private WorkspaceStateEnum(String value) {
        this.value = value;
    }
}
