package openapisdk.models.shared;


public enum LookupAttributeKeyEnum {
    EVENT_ID("EventId"),
    EVENT_NAME("EventName"),
    READ_ONLY("ReadOnly"),
    USERNAME("Username"),
    RESOURCE_TYPE("ResourceType"),
    RESOURCE_NAME("ResourceName"),
    EVENT_SOURCE("EventSource"),
    ACCESS_KEY_ID("AccessKeyId");

    public final String value;

    private LookupAttributeKeyEnum(String value) {
        this.value = value;
    }
}
