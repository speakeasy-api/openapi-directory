package openapisdk.models.shared;


public enum LogLevelEnum {
    DEBUG("DEBUG"),
    INFO("INFO"),
    ERROR("ERROR"),
    WARN("WARN"),
    DISABLED("DISABLED");

    public final String value;

    private LogLevelEnum(String value) {
        this.value = value;
    }
}
