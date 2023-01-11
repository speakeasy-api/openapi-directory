package openapisdk.models.shared;


public enum IpcModeEnum {
    HOST("host"),
    TASK("task"),
    NONE("none");

    public final String value;

    private IpcModeEnum(String value) {
        this.value = value;
    }
}
