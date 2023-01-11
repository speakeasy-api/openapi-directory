package openapisdk.models.shared;


public enum LifecycleErrorCodeEnum {
    SUCCESS("Success"),
    SCRIPT_MISSING("ScriptMissing"),
    SCRIPT_NOT_EXECUTABLE("ScriptNotExecutable"),
    SCRIPT_TIMED_OUT("ScriptTimedOut"),
    SCRIPT_FAILED("ScriptFailed"),
    UNKNOWN_ERROR("UnknownError");

    public final String value;

    private LifecycleErrorCodeEnum(String value) {
        this.value = value;
    }
}
