package openapisdk.models.shared;


public enum InstanceAccessControlAttributeConfigurationStatusEnum {
    ENABLED("ENABLED"),
    CREATION_IN_PROGRESS("CREATION_IN_PROGRESS"),
    CREATION_FAILED("CREATION_FAILED");

    public final String value;

    private InstanceAccessControlAttributeConfigurationStatusEnum(String value) {
        this.value = value;
    }
}
