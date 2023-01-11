package openapisdk.models.shared;


public enum SettingNameEnum {
    SERVICE_LONG_ARN_FORMAT("serviceLongArnFormat"),
    TASK_LONG_ARN_FORMAT("taskLongArnFormat"),
    CONTAINER_INSTANCE_LONG_ARN_FORMAT("containerInstanceLongArnFormat"),
    AWSVPC_TRUNKING("awsvpcTrunking"),
    CONTAINER_INSIGHTS("containerInsights");

    public final String value;

    private SettingNameEnum(String value) {
        this.value = value;
    }
}
