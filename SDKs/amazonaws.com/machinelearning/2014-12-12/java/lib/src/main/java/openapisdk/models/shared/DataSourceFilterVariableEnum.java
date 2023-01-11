package openapisdk.models.shared;


public enum DataSourceFilterVariableEnum {
    CREATED_AT("CreatedAt"),
    LAST_UPDATED_AT("LastUpdatedAt"),
    STATUS("Status"),
    NAME("Name"),
    DATA_LOCATION_S3("DataLocationS3"),
    IAM_USER("IAMUser");

    public final String value;

    private DataSourceFilterVariableEnum(String value) {
        this.value = value;
    }
}
