package openapisdk.models.operations;


public enum GitCreateTreeRequestBodyTreeTypeEnum {
    BLOB("blob"),
    TREE("tree"),
    COMMIT("commit");

    public final String value;

    private GitCreateTreeRequestBodyTreeTypeEnum(String value) {
        this.value = value;
    }
}
