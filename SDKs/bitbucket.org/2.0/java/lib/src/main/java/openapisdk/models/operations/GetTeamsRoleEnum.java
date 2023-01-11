package openapisdk.models.operations;


public enum GetTeamsRoleEnum {
    ADMIN("admin"),
    CONTRIBUTOR("contributor"),
    MEMBER("member");

    public final String value;

    private GetTeamsRoleEnum(String value) {
        this.value = value;
    }
}
