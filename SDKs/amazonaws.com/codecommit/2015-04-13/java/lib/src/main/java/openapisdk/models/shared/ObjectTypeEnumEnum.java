package openapisdk.models.shared;


public enum ObjectTypeEnumEnum {
    FILE("FILE"),
    DIRECTORY("DIRECTORY"),
    GIT_LINK("GIT_LINK"),
    SYMBOLIC_LINK("SYMBOLIC_LINK");

    public final String value;

    private ObjectTypeEnumEnum(String value) {
        this.value = value;
    }
}
