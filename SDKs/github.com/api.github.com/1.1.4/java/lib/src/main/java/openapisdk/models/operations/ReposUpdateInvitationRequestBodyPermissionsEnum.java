package openapisdk.models.operations;


public enum ReposUpdateInvitationRequestBodyPermissionsEnum {
    READ("read"),
    WRITE("write"),
    MAINTAIN("maintain"),
    TRIAGE("triage"),
    ADMIN("admin");

    public final String value;

    private ReposUpdateInvitationRequestBodyPermissionsEnum(String value) {
        this.value = value;
    }
}
