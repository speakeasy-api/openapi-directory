package openapisdk.models.shared;


public enum NotificationEntitySendIntervalEnum {
    FIVE_MINUTES("five_minutes"),
    FIFTEEN_MINUTES("fifteen_minutes"),
    HOURLY("hourly"),
    DAILY("daily");

    public final String value;

    private NotificationEntitySendIntervalEnum(String value) {
        this.value = value;
    }
}
