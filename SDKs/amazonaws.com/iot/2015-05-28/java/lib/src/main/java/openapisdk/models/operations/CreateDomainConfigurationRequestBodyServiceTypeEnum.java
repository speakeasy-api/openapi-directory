package openapisdk.models.operations;


public enum CreateDomainConfigurationRequestBodyServiceTypeEnum {
    DATA("DATA"),
    CREDENTIAL_PROVIDER("CREDENTIAL_PROVIDER"),
    JOBS("JOBS");

    public final String value;

    private CreateDomainConfigurationRequestBodyServiceTypeEnum(String value) {
        this.value = value;
    }
}
