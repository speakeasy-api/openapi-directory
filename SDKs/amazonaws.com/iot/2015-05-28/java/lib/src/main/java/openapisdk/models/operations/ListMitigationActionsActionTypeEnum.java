package openapisdk.models.operations;


public enum ListMitigationActionsActionTypeEnum {
    UPDATE_DEVICE_CERTIFICATE("UPDATE_DEVICE_CERTIFICATE"),
    UPDATE_CA_CERTIFICATE("UPDATE_CA_CERTIFICATE"),
    ADD_THINGS_TO_THING_GROUP("ADD_THINGS_TO_THING_GROUP"),
    REPLACE_DEFAULT_POLICY_VERSION("REPLACE_DEFAULT_POLICY_VERSION"),
    ENABLE_IOT_LOGGING("ENABLE_IOT_LOGGING"),
    PUBLISH_FINDING_TO_SNS("PUBLISH_FINDING_TO_SNS");

    public final String value;

    private ListMitigationActionsActionTypeEnum(String value) {
        this.value = value;
    }
}
