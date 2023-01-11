package openapisdk.models.shared;


public enum LogLevelEnum {
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR"),
    DEBUG("DEBUG");

    public final String value;

    private LogLevelEnum(String value) {
        this.value = value;
    }
}
