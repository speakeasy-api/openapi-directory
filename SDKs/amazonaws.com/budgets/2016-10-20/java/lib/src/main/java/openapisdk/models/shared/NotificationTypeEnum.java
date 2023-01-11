package openapisdk.models.shared;


public enum NotificationTypeEnum {
    ACTUAL("ACTUAL"),
    FORECASTED("FORECASTED");

    public final String value;

    private NotificationTypeEnum(String value) {
        this.value = value;
    }
}
