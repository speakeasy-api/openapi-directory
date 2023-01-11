package openapisdk.models.shared;


public enum WorkspaceStatusCodeEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    CREATION_FAILED("CREATION_FAILED");

    public final String value;

    private WorkspaceStatusCodeEnum(String value) {
        this.value = value;
    }
}
