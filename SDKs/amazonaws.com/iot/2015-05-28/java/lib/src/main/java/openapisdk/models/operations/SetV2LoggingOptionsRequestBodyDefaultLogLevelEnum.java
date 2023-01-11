package openapisdk.models.operations;


public enum SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum {
    DEBUG("DEBUG"),
    INFO("INFO"),
    ERROR("ERROR"),
    WARN("WARN"),
    DISABLED("DISABLED");

    public final String value;

    private SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum(String value) {
        this.value = value;
    }
}
