package openapisdk.models.shared;


public enum InstalledComponentLifecycleStateEnum {
    NEW_("NEW"),
    INSTALLED("INSTALLED"),
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    ERRORED("ERRORED"),
    BROKEN("BROKEN"),
    FINISHED("FINISHED");

    public final String value;

    private InstalledComponentLifecycleStateEnum(String value) {
        this.value = value;
    }
}
