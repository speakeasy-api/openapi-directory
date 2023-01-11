package openapisdk.models.operations;


public enum UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum {
    UPLOAD("upload"),
    DOWNLOAD("download"),
    DELETE("delete"),
    ALL("all");

    public final String value;

    private UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum(String value) {
        this.value = value;
    }
}
