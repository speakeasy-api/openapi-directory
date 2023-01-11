package openapisdk.models.shared;


public enum RepositoryInvitationPermissionsEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin");

    public final String value;

    private RepositoryInvitationPermissionsEnum(String value) {
        this.value = value;
    }
}
