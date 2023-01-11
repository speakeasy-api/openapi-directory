package openapisdk.models.operations;


public enum GetRepositoriesRoleEnum {
    ADMIN("admin"),
    CONTRIBUTOR("contributor"),
    MEMBER("member"),
    OWNER("owner");

    public final String value;

    private GetRepositoriesRoleEnum(String value) {
        this.value = value;
    }
}
