package openapisdk.models.shared;


public enum NotificationAttributesActionEnum {
    UPLOAD("upload"),
    DOWNLOAD("download"),
    DELETE("delete"),
    ALL("all");

    public final String value;

    private NotificationAttributesActionEnum(String value) {
        this.value = value;
    }
}
