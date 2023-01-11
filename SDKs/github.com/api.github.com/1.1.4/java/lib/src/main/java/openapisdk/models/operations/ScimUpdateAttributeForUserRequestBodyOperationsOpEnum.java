package openapisdk.models.operations;


public enum ScimUpdateAttributeForUserRequestBodyOperationsOpEnum {
    ADD("add"),
    REMOVE("remove"),
    REPLACE("replace");

    public final String value;

    private ScimUpdateAttributeForUserRequestBodyOperationsOpEnum(String value) {
        this.value = value;
    }
}
