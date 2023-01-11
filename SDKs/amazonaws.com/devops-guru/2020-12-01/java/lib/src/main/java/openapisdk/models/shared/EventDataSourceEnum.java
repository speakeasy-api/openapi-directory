package openapisdk.models.shared;


public enum EventDataSourceEnum {
    AWS_CLOUD_TRAIL("AWS_CLOUD_TRAIL"),
    AWS_CODE_DEPLOY("AWS_CODE_DEPLOY");

    public final String value;

    private EventDataSourceEnum(String value) {
        this.value = value;
    }
}
