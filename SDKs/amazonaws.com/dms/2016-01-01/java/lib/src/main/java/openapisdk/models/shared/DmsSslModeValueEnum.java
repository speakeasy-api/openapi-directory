package openapisdk.models.shared;


public enum DmsSslModeValueEnum {
    NONE("none"),
    REQUIRE("require"),
    VERIFY_CA("verify-ca"),
    VERIFY_FULL("verify-full");

    public final String value;

    private DmsSslModeValueEnum(String value) {
        this.value = value;
    }
}
