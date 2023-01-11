package openapisdk.models.shared;


public enum ConfigurationEventResourceTypeEnum {
    CLOUDWATCH_ALARM("CLOUDWATCH_ALARM"),
    CLOUDWATCH_LOG("CLOUDWATCH_LOG"),
    CLOUDFORMATION("CLOUDFORMATION"),
    SSM_ASSOCIATION("SSM_ASSOCIATION");

    public final String value;

    private ConfigurationEventResourceTypeEnum(String value) {
        this.value = value;
    }
}
