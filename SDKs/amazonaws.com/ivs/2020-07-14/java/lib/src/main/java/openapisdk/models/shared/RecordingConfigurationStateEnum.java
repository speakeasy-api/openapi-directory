package openapisdk.models.shared;


public enum RecordingConfigurationStateEnum {
    CREATING("CREATING"),
    CREATE_FAILED("CREATE_FAILED"),
    ACTIVE("ACTIVE");

    public final String value;

    private RecordingConfigurationStateEnum(String value) {
        this.value = value;
    }
}
