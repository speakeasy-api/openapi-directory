package openapisdk.models.operations;


public enum GetWorkspacesRoleEnum {
    OWNER("owner"),
    COLLABORATOR("collaborator"),
    MEMBER("member");

    public final String value;

    private GetWorkspacesRoleEnum(String value) {
        this.value = value;
    }
}
