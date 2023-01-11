package openapisdk.models.shared;


public enum WorkspaceImageStateEnum {
    AVAILABLE("AVAILABLE"),
    PENDING("PENDING"),
    ERROR("ERROR");

    public final String value;

    private WorkspaceImageStateEnum(String value) {
        this.value = value;
    }
}
