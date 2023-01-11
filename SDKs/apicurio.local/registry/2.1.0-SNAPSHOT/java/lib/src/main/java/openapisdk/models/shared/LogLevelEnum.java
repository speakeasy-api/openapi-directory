package openapisdk.models.shared;


public enum LogLevelEnum {
    DEBUG("DEBUG"),
    TRACE("TRACE"),
    WARN("WARN"),
    ERROR("ERROR"),
    SEVERE("SEVERE"),
    WARNING("WARNING"),
    INFO("INFO"),
    CONFIG("CONFIG"),
    FINE("FINE"),
    FINER("FINER"),
    FINEST("FINEST");

    public final String value;

    private LogLevelEnum(String value) {
        this.value = value;
    }
}
