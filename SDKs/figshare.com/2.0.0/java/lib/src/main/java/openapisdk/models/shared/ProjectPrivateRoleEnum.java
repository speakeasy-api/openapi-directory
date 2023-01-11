package openapisdk.models.shared;


public enum ProjectPrivateRoleEnum {
    OWNER("Owner"),
    COLLABORATOR("Collaborator"),
    VIEWER("Viewer");

    public final String value;

    private ProjectPrivateRoleEnum(String value) {
        this.value = value;
    }
}
