package openapisdk.models.operations;


public enum GetSnippetsRoleEnum {
    OWNER("owner"),
    CONTRIBUTOR("contributor"),
    MEMBER("member");

    public final String value;

    private GetSnippetsRoleEnum(String value) {
        this.value = value;
    }
}
