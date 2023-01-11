package openapisdk.models.shared;


public enum ConfigurationStateEnum {
    ACTIVE("ACTIVE"),
    UPDATE_IN_PROGRESS("UPDATE_IN_PROGRESS"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private ConfigurationStateEnum(String value) {
        this.value = value;
    }
}
