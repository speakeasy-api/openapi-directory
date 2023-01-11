package openapisdk.models.shared;


public enum ProjectCompletePrivateRoleEnum {
    OWNER("Owner"),
    COLLABORATOR("Collaborator"),
    VIEWER("Viewer");

    public final String value;

    private ProjectCompletePrivateRoleEnum(String value) {
        this.value = value;
    }
}
