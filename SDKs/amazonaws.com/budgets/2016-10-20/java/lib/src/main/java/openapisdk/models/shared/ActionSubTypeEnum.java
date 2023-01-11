package openapisdk.models.shared;


public enum ActionSubTypeEnum {
    STOP_EC2_INSTANCES("STOP_EC2_INSTANCES"),
    STOP_RDS_INSTANCES("STOP_RDS_INSTANCES");

    public final String value;

    private ActionSubTypeEnum(String value) {
        this.value = value;
    }
}
