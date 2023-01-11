package openapisdk.models.operations;


public enum GetSettingsAttributeEnum {
    ALL("ALL"),
    IS_AWS_ORG_ENABLED("IS_AWS_ORG_ENABLED"),
    SNS_TOPIC("SNS_TOPIC"),
    DEFAULT_ASSESSMENT_REPORTS_DESTINATION("DEFAULT_ASSESSMENT_REPORTS_DESTINATION"),
    DEFAULT_PROCESS_OWNERS("DEFAULT_PROCESS_OWNERS");

    public final String value;

    private GetSettingsAttributeEnum(String value) {
        this.value = value;
    }
}
