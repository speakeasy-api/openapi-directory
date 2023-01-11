package openapisdk.models.operations;


public enum GetRepositoriesWorkspaceRoleEnum {
    ADMIN("admin"),
    CONTRIBUTOR("contributor"),
    MEMBER("member"),
    OWNER("owner");

    public final String value;

    private GetRepositoriesWorkspaceRoleEnum(String value) {
        this.value = value;
    }
}
