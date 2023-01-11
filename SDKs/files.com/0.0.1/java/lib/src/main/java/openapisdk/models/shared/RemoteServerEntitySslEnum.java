package openapisdk.models.shared;


public enum RemoteServerEntitySslEnum {
    IF_AVAILABLE("if_available"),
    REQUIRE("require"),
    REQUIRE_IMPLICIT("require_implicit"),
    NEVER("never");

    public final String value;

    private RemoteServerEntitySslEnum(String value) {
        this.value = value;
    }
}
