package openapisdk.models.shared;


public enum ReloadOptionValueEnum {
    DATA_RELOAD("data-reload"),
    VALIDATE_ONLY("validate-only");

    public final String value;

    private ReloadOptionValueEnum(String value) {
        this.value = value;
    }
}
