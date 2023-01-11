package openapisdk.models.operations;


public enum PostRemoteServersRequestBodySslEnum {
    IF_AVAILABLE("if_available"),
    REQUIRE("require"),
    REQUIRE_IMPLICIT("require_implicit"),
    NEVER("never");

    public final String value;

    private PostRemoteServersRequestBodySslEnum(String value) {
        this.value = value;
    }
}
