package openapisdk.models.operations;


public enum CreateEventSourceMappingRequestBodyStartingPositionEnum {
    TRIM_HORIZON("TRIM_HORIZON"),
    LATEST("LATEST"),
    AT_TIMESTAMP("AT_TIMESTAMP");

    public final String value;

    private CreateEventSourceMappingRequestBodyStartingPositionEnum(String value) {
        this.value = value;
    }
}
