package openapisdk.models.shared;


public enum WorkspaceDirectoryStateEnum {
    REGISTERING("REGISTERING"),
    REGISTERED("REGISTERED"),
    DEREGISTERING("DEREGISTERING"),
    DEREGISTERED("DEREGISTERED"),
    ERROR("ERROR");

    public final String value;

    private WorkspaceDirectoryStateEnum(String value) {
        this.value = value;
    }
}
