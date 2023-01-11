package openapisdk.models.operations;


public enum CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum {
    NONE("NONE"),
    TRACE("TRACE"),
    DEBUG("DEBUG"),
    VERBOSE("VERBOSE"),
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR"),
    FATAL("FATAL");

    public final String value;

    private CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum(String value) {
        this.value = value;
    }
}
