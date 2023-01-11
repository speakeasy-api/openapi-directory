package openapisdk.models.shared;


public enum RepositoryInvitationPermissionsEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin"),
    TRIAGE("triage"),
    MAINTAIN("maintain");

    public final String value;

    private RepositoryInvitationPermissionsEnum(String value) {
        this.value = value;
    }
}
