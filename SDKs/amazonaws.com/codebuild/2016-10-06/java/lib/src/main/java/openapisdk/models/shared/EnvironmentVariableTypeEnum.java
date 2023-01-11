package openapisdk.models.shared;


public enum EnvironmentVariableTypeEnum {
    PLAINTEXT("PLAINTEXT"),
    PARAMETER_STORE("PARAMETER_STORE"),
    SECRETS_MANAGER("SECRETS_MANAGER");

    public final String value;

    private EnvironmentVariableTypeEnum(String value) {
        this.value = value;
    }
}
