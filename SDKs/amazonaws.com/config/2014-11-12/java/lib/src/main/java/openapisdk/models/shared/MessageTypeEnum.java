package openapisdk.models.shared;


public enum MessageTypeEnum {
    CONFIGURATION_ITEM_CHANGE_NOTIFICATION("ConfigurationItemChangeNotification"),
    CONFIGURATION_SNAPSHOT_DELIVERY_COMPLETED("ConfigurationSnapshotDeliveryCompleted"),
    SCHEDULED_NOTIFICATION("ScheduledNotification"),
    OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION("OversizedConfigurationItemChangeNotification");

    public final String value;

    private MessageTypeEnum(String value) {
        this.value = value;
    }
}
