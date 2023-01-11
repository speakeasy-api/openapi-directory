package openapisdk.models.operations;


public enum MigrationsStartImportRequestBodyVcsEnum {
    SUBVERSION("subversion"),
    GIT("git"),
    MERCURIAL("mercurial"),
    TFVC("tfvc");

    public final String value;

    private MigrationsStartImportRequestBodyVcsEnum(String value) {
        this.value = value;
    }
}
