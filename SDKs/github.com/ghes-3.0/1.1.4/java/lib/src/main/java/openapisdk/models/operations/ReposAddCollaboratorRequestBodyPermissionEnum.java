package openapisdk.models.operations;


public enum ReposAddCollaboratorRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin"),
    MAINTAIN("maintain"),
    TRIAGE("triage");

    public final String value;

    private ReposAddCollaboratorRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
