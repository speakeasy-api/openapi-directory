package openapisdk.models.operations;


public enum GetDescribeSpotFleetRequestHistoryEventTypeEnum {
    INSTANCE_CHANGE("instanceChange"),
    FLEET_REQUEST_CHANGE("fleetRequestChange"),
    ERROR("error"),
    INFORMATION("information");

    public final String value;

    private GetDescribeSpotFleetRequestHistoryEventTypeEnum(String value) {
        this.value = value;
    }
}
