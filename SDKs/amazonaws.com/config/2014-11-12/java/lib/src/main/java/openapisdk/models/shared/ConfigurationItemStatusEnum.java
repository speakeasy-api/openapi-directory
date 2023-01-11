package openapisdk.models.shared;


public enum ConfigurationItemStatusEnum {
    OK("OK"),
    RESOURCE_DISCOVERED("ResourceDiscovered"),
    RESOURCE_NOT_RECORDED("ResourceNotRecorded"),
    RESOURCE_DELETED("ResourceDeleted"),
    RESOURCE_DELETED_NOT_RECORDED("ResourceDeletedNotRecorded");

    public final String value;

    private ConfigurationItemStatusEnum(String value) {
        this.value = value;
    }
}
