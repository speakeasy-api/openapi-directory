package openapisdk.models.shared;


public enum UserEntitySslRequiredEnum {
    USE_SYSTEM_SETTING("use_system_setting"),
    ALWAYS_REQUIRE("always_require"),
    NEVER_REQUIRE("never_require");

    public final String value;

    private UserEntitySslRequiredEnum(String value) {
        this.value = value;
    }
}
