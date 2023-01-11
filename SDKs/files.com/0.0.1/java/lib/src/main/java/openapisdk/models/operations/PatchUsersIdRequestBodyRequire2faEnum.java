package openapisdk.models.operations;


public enum PatchUsersIdRequestBodyRequire2faEnum {
    USE_SYSTEM_SETTING("use_system_setting"),
    ALWAYS_REQUIRE("always_require"),
    NEVER_REQUIRE("never_require");

    public final String value;

    private PatchUsersIdRequestBodyRequire2faEnum(String value) {
        this.value = value;
    }
}
