package openapisdk.models.operations;


public enum SetV2LoggingLevelRequestBodyLogLevelEnum {
    DEBUG("DEBUG"),
    INFO("INFO"),
    ERROR("ERROR"),
    WARN("WARN"),
    DISABLED("DISABLED");

    public final String value;

    private SetV2LoggingLevelRequestBodyLogLevelEnum(String value) {
        this.value = value;
    }
}
