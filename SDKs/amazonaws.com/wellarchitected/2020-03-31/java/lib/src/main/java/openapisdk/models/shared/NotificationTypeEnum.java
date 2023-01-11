package openapisdk.models.shared;


public enum NotificationTypeEnum {
    LENS_VERSION_UPGRADED("LENS_VERSION_UPGRADED"),
    LENS_VERSION_DEPRECATED("LENS_VERSION_DEPRECATED");

    public final String value;

    private NotificationTypeEnum(String value) {
        this.value = value;
    }
}
