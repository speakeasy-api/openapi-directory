package openapisdk.models.shared;


public enum ScimUserOperationsOpEnum {
    ADD("add"),
    REMOVE("remove"),
    REPLACE("replace");

    public final String value;

    private ScimUserOperationsOpEnum(String value) {
        this.value = value;
    }
}
