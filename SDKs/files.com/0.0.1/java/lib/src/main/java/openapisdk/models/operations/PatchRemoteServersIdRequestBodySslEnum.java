package openapisdk.models.operations;


public enum PatchRemoteServersIdRequestBodySslEnum {
    IF_AVAILABLE("if_available"),
    REQUIRE("require"),
    REQUIRE_IMPLICIT("require_implicit"),
    NEVER("never");

    public final String value;

    private PatchRemoteServersIdRequestBodySslEnum(String value) {
        this.value = value;
    }
}
