package openapisdk.models.operations;


public enum ProjectsAddCollaboratorRequestBodyPermissionEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin");

    public final String value;

    private ProjectsAddCollaboratorRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
