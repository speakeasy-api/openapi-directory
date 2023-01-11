package openapisdk.models.operations;


public enum CreateArtifactIfExistsEnum {
    FAIL("FAIL"),
    UPDATE("UPDATE"),
    RETURN_("RETURN"),
    RETURN_OR_UPDATE("RETURN_OR_UPDATE");

    public final String value;

    private CreateArtifactIfExistsEnum(String value) {
        this.value = value;
    }
}
