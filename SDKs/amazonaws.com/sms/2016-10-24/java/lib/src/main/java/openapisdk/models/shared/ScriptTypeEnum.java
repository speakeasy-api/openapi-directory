package openapisdk.models.shared;


public enum ScriptTypeEnum {
    SHELL_SCRIPT("SHELL_SCRIPT"),
    POWERSHELL_SCRIPT("POWERSHELL_SCRIPT");

    public final String value;

    private ScriptTypeEnum(String value) {
        this.value = value;
    }
}
