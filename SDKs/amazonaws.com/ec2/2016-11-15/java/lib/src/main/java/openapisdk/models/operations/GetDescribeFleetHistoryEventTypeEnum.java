package openapisdk.models.operations;


public enum GetDescribeFleetHistoryEventTypeEnum {
    INSTANCE_CHANGE("instance-change"),
    FLEET_CHANGE("fleet-change"),
    SERVICE_ERROR("service-error");

    public final String value;

    private GetDescribeFleetHistoryEventTypeEnum(String value) {
        this.value = value;
    }
}
