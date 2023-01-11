package openapisdk.models.shared;


public enum StackErrorCodeEnum {
    STORAGE_CONNECTOR_ERROR("STORAGE_CONNECTOR_ERROR"),
    INTERNAL_SERVICE_ERROR("INTERNAL_SERVICE_ERROR");

    public final String value;

    private StackErrorCodeEnum(String value) {
        this.value = value;
    }
}
